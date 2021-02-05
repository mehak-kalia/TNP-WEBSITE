<?php

namespace App\Http\Controllers;

use App\ApiCode;
use App\Models\User;
use App\Models\FormStatus;
use Illuminate\Http\Request;
use App\Mail\EmailVerification;
use App\Notifications\EmailVerification2;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Models\PasswordReset; 
use Illuminate\Support\Str;
use Carbon\Carbon;

class VerificationController extends Controller {

    public function __construct() {
        
        }

    /**
     * Verify email
     *
     * @param $user_id
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function verify($user_id, Request $request) {

        $user = User::findOrFail($request->id);
        $user->email = $request->email;
    	$userValid = User::where('email', $user->email)->first();
    	if (!$userValid) {
    		return response()->json(['alert'=> 'Invalid Mail!']);		
        }
        
        // if (!$user->hasVerifiedEmail()) {
            // $user->sendEmailVerificationNotification(new EmailVerification);
            // $user->markEmailAsVerified();
            // $form_step_change= DB::table('form_statuses')
            // ->where('user_id', $user->id)
            // ->update(['form_step' => 1]);
        if ($user->hasVerifiedEmail()) {
            return response()->json(['msg' =>"Email already verified."]);
        }
        $token = Str::random(60);

    	PasswordReset::create([

    		'email' => $user->email,

			'token' => $token,
    	]);
             
    	$tokenData = PasswordReset::where('email', $user->email)->first();

    		if($tokenData){
    			Mail::to($tokenData->email)->send(new EmailVerification($tokenData));
    			return response()->json(['msg' => 'A Verification Link has been sent to your Mail!']);
    		}
    		else{
    			return response()->json(['alert' => 'Sorry we could not send a link, try again later!']);
    		}
        

        // return response()->json(["msg" => "Email already verified."]);

        // return redirect()->to('/');
    }

    /**
     * Resend email verification link
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function resend() {
        if (auth()->user()->hasVerifiedEmail()) {
            return $this->respondBadRequest(ApiCode::EMAIL_ALREADY_VERIFIED);
        }

        auth()->user()->sendEmailVerificationNotification();

        return $this->respondWithMessage("Email verification link sent on your email id");
    }
    public function getUsers($id) {
        $user = User::findOrFail($id);
        if ($user->hasVerifiedEmail()) {
            return response()->json(['msg' => "Email already verified."]);
        }
        return response()->json(['alert' => 'error occurs']);
    }
}
