<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    public function successResponse($data, $message)
    {
        return response()->json([
            'data' => $data,
            'message' => $message,
            'success' => true,
        ]);
    }

    public function errorResponse($message, $data)
    {
        return response()->json([
            'data' => $data,
            'message' => $message,
            'success' => false,
        ]);
    }
}
