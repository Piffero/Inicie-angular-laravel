<?php

namespace Api\Posts\Actions;

use App\Http\Controllers\PostController;

class ListPostController extends PostController
{
    public function action(int $id = null) {       
        // Verifica se Id veio
        if (!empty($id)){                        
            return $this->repository->findPost($id);
        }
        
        return $this->repository->allPosts();
    }

    public function actionUser(int $user_id, int $id = null) {
        // Verifica se Id veio
        if (!empty($id)){                        
            return $this->repository->findPost($id);
        }

        return $this->repository->allUserPosts($user_id);
    }
}
