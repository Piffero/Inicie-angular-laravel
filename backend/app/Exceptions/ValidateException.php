<?php

namespace App\Exceptions;

use DateTime;
use Exception;

class ValidateException extends Exception
{
    private array $fields = [];
    protected array $fieldData = [];
    protected int $nErrorMessages = 0;

    public function validate(array $fields): void
    {
        foreach ($fields as $field => $configRules) {
            $this->setRules($field, $configRules['rules'], $configRules['postdata']);
        }
    }

    protected function setRules(string|array $field, string $rules, mixed $postdata = null): mixed
    {
        if(is_array($field)) {
            $this->isFieldArrayMap($field, $rules);
        }

        if (empty($field) || empty($rules)) {
             return $this; 
        }
        
        $this->fieldData[$field] = [
            'field' => $field,
            'rules' => $rules,
            'value' => $postdata,
            'error' => ''
        ];

        return $this;
    }

    public function run(): bool
    {
        foreach ($this->fieldData as $row) {
            $this->execute($row['field'], $row['value'], explode('|', $row['rules']));
        }
        $total_errors = $this->nErrorMessages;
        return ($total_errors == 0)? true : false;
    }

    public function xErrorReporting(array $xError = [])
    {
        foreach ($this->fieldData as $field) {
            $xError = array_merge($xError, [$field['error']]);
        }
        $xError = array_filter($xError); sort($xError);
        $this->error_reporting($xError);
    }

    protected function error_reporting($error): void
    {
        throw new Exception(json_encode($error, JSON_UNESCAPED_UNICODE));
    }

    // --------------------------------------------------------------------------------------------------
    // ----------------------------------- METODOS PARA RODAR VALIDAÇÃO ---------------------------------
    // --------------------------------------------------------------------------------------------------

    private function execute(string $field, mixed $postdata = null, array $rules): void
    {
        foreach ($rules as $rule) {
           $args = null;
           if (preg_match("/(.*?)\[(.*)\]/", $rule, $match)) {
               $rule = $match[1];
               $args = $match[2];
           }

           if (!method_exists($this, $rule)) {
               $this->error_reporting("DDE-F1-L68 :: Metodo de validação $rule não existe. Contate Administrador");
           }

           call_user_func([$this, $rule], ['field' => $field, 'postdata' => $postdata, 'validate' => $args]);
           $this->fields[$field] = $postdata ?? '';
        }
    }

    private function isFieldArrayMap(array $fields, string $rules)
    {
        foreach ($fields as $field => $postdata) {
            $this->setRules($field, $rules, $postdata);
        }
    }

    private function set_message(string $field, string $error)
    {
        $this->fieldData[$field]['error'] = $error;
    }

    public function getFields(): array
    {
        return array_filter($this->fields);
    }

    protected function setFields(array $newFields): void
    {
        $this->fields = $newFields;
    }

    // --------------------------------------------------------------------------------------------------
    // --------------------------------------- METODOS DE VALIDAÇÃO -------------------------------------
    // --------------------------------------------------------------------------------------------------

    public function required($xdata): void 
    {
        if (empty($xdata['postdata'])) {
            $this->nErrorMessages++;            
            $this->set_message($xdata['field'], 'O campo ['.$xdata['field'].'] é de preenchimento obrigatório.' );
        }
    }

    public function min_length($xdata): void
    {
        $valid = true;
        $error = '';
        if (!empty($xdata['postdata'])) {
            if (preg_match("/[^0-9]/", $xdata['validate'])) {
                $this->error_reporting('DDE-F1-L111 :: Error ao validar o campo ['.$xdata['field'].']. Contate Administrador');
            }
            if (strlen($xdata['postdata']) < $xdata['validate']) {
                $valid = false;
                $error = 'não contêm o número de caracteres mínimo necessário.';
            }
        }

        if (!$valid) {
            $this->nErrorMessages++;            
            $this->set_message($xdata['field'], 'O campo ['.$xdata['field'].'] '.$error );
        }
    }

    public function max_length($xdata): void
    {
        $valid = true;
        $error = '';
        if (!empty($xdata['postdata'])) {
            if (preg_match("/[^0-9]/", $xdata['validate'])) {
                $this->error_reporting('DDE-F1-L131 :: Error ao validar o campo ['.$xdata['field'].']. Contate Administrador');
            }
            if (strlen($xdata['postdata']) > $xdata['validate']) {
                $valid = false;
                $error = 'excede o número de caracteres máximo permitido.';
            }
        }

        if (!$valid) {
            $this->nErrorMessages++;            
            $this->set_message($xdata['field'], 'O campo ['.$xdata['field'].'] '.$error );
        }
    }

    public function exact_length(array $xdata)
    {
        $valid = true;
        $error = '';
        if (!empty($xdata['postdata'])) {
            if (preg_match("/[^0-9]/", $xdata['validate'])) {
                $this->error_reporting('DDE-F1-L151 :: Error ao validar o campo ['.$xdata['field'].']. Contate Administrador');
            }
            if (strlen($xdata['postdata']) != $xdata['validate']) {
                $valid = false;
                $error = 'não possui o número de caracteres equivalente o necessário permitido.';
            }
        }

        if (!$valid) {
            $this->nErrorMessages++;
            $this->set_message($xdata['field'], 'O campo ['.$xdata['field'].'] '.$error );
        }
    }

    public function metches(array $xdata)
    {
        $valid = true;
        if (!empty($xdata['postdata'])) {
            $valid = (bool) ($xdata['postdata'] === $this->fieldData[$xdata['validate']]['value']);
            if (!$valid) {
                $this->nErrorMessages++;            
                $this->set_message($xdata['field'], 'O campo ['.$xdata['field'].'], não é equivalente ao campo ['.$xdata['validate'].']');
                return;
            }
        }

        if (!$valid) {
            $this->nErrorMessages++;
            $this->set_message($xdata['field'], 'O campo ['.$xdata['field'].'] não possui um valor para comparar, vide documentação.');
        }
    }

    public function numeric(array $xdata)
	{
        $valid = true;
        if (!empty($xdata['postdata'])) {
            if (!\is_int($xdata['postdata'])) {
                $valid = (bool)preg_match( '/^[\-+]?[0-9]*\.?[0-9]+$/', (string)$xdata['postdata']);
            }
            
            if (!$valid) {
                $this->nErrorMessages++;            
                $this->set_message($xdata['field'], 'O campo ['.$xdata['field'].'], não é um valor númerico valido.');
                return;
            }
        }

        if (!$valid) {
            $this->nErrorMessages++;
            $this->set_message($xdata['field'], 'O campo ['.$xdata['field'].'] não possui um valor para validar, vide documentação.');
        }

    }

    public function integer(array $xdata)
	{
        $valid = true;
        if (!empty($xdata['postdata'])) {
            $valid = (bool)preg_match( '/^[\-+]?[0-9]+$/', $xdata['postdata']);
            if (!$valid) {
                $this->nErrorMessages++;            
                $this->set_message($xdata['field'], 'O campo ['.$xdata['field'].'], não é um valor númerico valido.');
                return;
            }
        }

        if (!$valid) {
            $this->nErrorMessages++;
            $this->set_message($xdata['field'], 'O campo ['.$xdata['field'].'] não possui um valor para validar, vide documentação.');
        }
    }

    public function valid_email(array $xdata)
	{
        $valid = true;
        if (!empty($xdata['postdata'])) {
            if (!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $xdata['postdata'])) {
                $this->nErrorMessages++;            
                $this->set_message($xdata['field'], 'O Endereço informado no campo ['.$xdata['field'].'], não é um endereço de email válido');
                return;
            }
        }

        if (!$valid) {
            $this->nErrorMessages++;
            $this->set_message($xdata['field'], 'O campo ['.$xdata['field'].'] não possui um valor para validar, vide documentação.');
        }
	}

    public function valid_base64(array $xdata)
	{
        $valid = true;
        if (!empty($xdata['postdata'])) {
            if (!preg_match('/^[a-zA-Z0-9\/\r\n+]*={0,2}$/', $xdata['postdata'])) {
                $this->nErrorMessages++;
                $this->set_message($xdata['field'], 'Não foi possível validar arquivo enviado pelo campo ['.$xdata['field'].'], não é um arquivo válido');
                return;
            }
        }

        if (!$valid) {
            $this->nErrorMessages++;
            $this->set_message($xdata['field'], 'O campo ['.$xdata['field'].'] não possui um valor para validar, vide documentação.');
        }
	}

    public function valid_datetime(array $xdata)
    {
        $valid = true;
        if (!empty($xdata['postdata'])) {
            $format = 'Y-m-d H:s:i';
            $d =DateTime::createFromFormat($format, $xdata['postdata']);
            if ($d && $d->format($format) !== $xdata['postdata']) {
                $this->nErrorMessages++;
                $this->set_message($xdata['field'], 'Não foi possível validar data e hora informado no campo ['.$xdata['field'].'], não é uma data ou formato válido');
                return;
            }
        }

        if (!$valid) {
            $this->nErrorMessages++;
            $this->set_message($xdata['field'], 'O campo ['.$xdata['field'].'] não possui um valor para validar, vide documentação.');
        }
    }

    public function if_there_is(array  $xdata)
    {
        if (!empty($xdata['postdata'])) {
            $this->execute($xdata['field'], $xdata['postdata'], explode('|', $xdata['validate']));
        }
    }
}