<?php

namespace App\Http\Controllers\CMS;

use App\Http\Controllers\Controller;
use App\Models\CMS\Nav;
use http\Env\Request;

class NavController extends Controller
{

    public function getSingleNav($id)
    {
        $data = (new \App\Models\CMS\Nav)->getSingleNav($id);
        if ($data)
            return $this->successResponse($data
                , 'Data Fetched Successfully');
        else
            return $this->errorResponse('No Record Found', null);
    }

    public function createNav(Request $request)
    {
        $this->validate($request, [
            'text' => 'required',
            'url' => 'required',
            'is_collapsable' => 'required',
            'parent_id' => 'required',
        ]);
        try {
            $request = $request->only(['text', 'url', 'is_collapsable', 'parent_id']);
            $nav = new Nav();
            $nav->fill($request);
            $nav->save();
            return $this->successResponse($nav, 'Data Added Successfully');
        } catch (\Exception $exception) {
            return $this->errorResponse($exception->getMessage(), null);

        }

    }
}
