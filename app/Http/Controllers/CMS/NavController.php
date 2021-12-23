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
        $this->validateNavRequest($request);
        $this->saveOrUpdateNav($request, 0);

    }

    public function updateNav(Request $request, $id)
    {
        $this->validateNavRequest($request, $id);


    }

    private function validateNavRequest(Request $request)
    {
        $this->validate($request, [
            'text' => 'required',
            'url' => 'required',
            'is_collapsable' => 'required',
            'parent_id' => 'required',
        ]);
    }

    private function saveOrUpdateNav(Request $request, $id = null)
    {
        try {
            $request = $request->only(['text', 'url', 'is_collapsable', 'parent_id']);
            if ($id) {
                $nav = Nav::find($id);
                $nav->fill($request);
                $nav->update();
                return $this->successResponse($nav, 'Data Updated Successfully');
            } else {
                $nav = new Nav();
                $nav->fill($request);
                $nav->save();
                return $this->successResponse($nav, 'Data Added Successfully');
            }

        } catch (\Exception $exception) {
            return $this->errorResponse($exception->getMessage(), null);

        }
    }

    public function deleteNav($id)
    {
        $nav = Nav::find($id)->delete();
        if ($nav) {
            return $this->successResponse($nav, 'Data Deleted Successfully');
        } else {
            return $this->errorResponse('Data Not Found');

        }
    }
}
