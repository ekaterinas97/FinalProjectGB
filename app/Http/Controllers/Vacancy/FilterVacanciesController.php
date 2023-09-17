<?php

namespace App\Http\Controllers\Vacancy;

use App\Http\Controllers\Controller;
use App\Models\Vacancy;
use Illuminate\Http\Request;

class FilterVacanciesController extends Controller
{

    public function filterVacancy(Request $request) 
    {
        $filterData = $request->post('filterData');

        $filtredData = Vacancy::FilterBuildQuery($filterData);

        return \response($filtredData);
    }
}
