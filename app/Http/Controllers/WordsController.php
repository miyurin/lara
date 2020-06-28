<?php
namespace App\Http\Controllers;
ini_set("memory_limit", "200M");

use Illuminate\Http\Request;
use App\Word;
use App\Http\Requests\WordRequest;

class WordsController extends Controller
{
    public function search() {
        $words = Word::get();
        return response()->json($words);
    }

    public static function getArray() {
        $wordsArray = [
            "あ"=>"a","い"=>"i","う"=>"u","え"=>"e","お"=>"o",
            "か"=>"ka","き"=>"ki","く"=>"ku","け"=>"ke","こ"=>"ko",
            "さ"=>"sa","し"=>"si","す"=>"su","せ"=>"se","そ"=>"so",
            "た"=>"ta","ち"=>"ti","つ"=>"tu","て"=>"te","と"=>"to",
            "な"=>"na","に"=>"ni","ぬ"=>"nu","ね"=>"ne","の"=>"no",
            "は"=>"ha","ひ"=>"hi","ふ"=>"fu","へ"=>"he","ほ"=>"ho",
            "ま"=>"ma","み"=>"mi","む"=>"mu","め"=>"me","も"=>"mo",
            "や"=>"ya","ゆ"=>"yu","よ"=>"yo",
            "ら"=>"ra","り"=>"ri","る"=>"ru","れ"=>"re","ろ"=>"ro",
            "わ"=>"wa","を"=>"wo","ん"=>"nn",
            "が"=>"ga","ぎ"=>"gi","ぐ"=>"gu","げ"=>"ge","ご"=>"go",
            "ざ"=>"za","じ"=>"ji","ず"=>"zu","ぜ"=>"ze","ぞ"=>"zo",
            "だ"=>"da","ぢ"=>"di","づ"=>"du","で"=>"de","ど"=>"do",
            "ば"=>"ba","び"=>"bi","ぶ"=>"bu","べ"=>"be","ぼ"=>"bo",
            "ぱ"=>"pa","ぴ"=>"pi","ぷ"=>"pu","ぺ"=>"pe","ぽ"=>"po",
            "ぁ"=>"la","ぃ"=>"li","ぅ"=>"lu","ぇ"=>"le","ぉ"=>"lo",
            "きゃ"=>"kya","きゅ"=>"kyu","きょ"=>"kyo",
            "しゃ"=>"sya","しゅ"=>"syu","しょ"=>"syo",
            "ちゃ"=>"tya","ちゅ"=>"tyu","ちょ"=>"tyo",
            "にゃ"=>"nya","にゅ"=>"nyu","にょ"=>"nyo",
            "ひゃ"=>"hya","ひゅ"=>"hyu","ひょ"=>"hyo",
            "みゃ"=>"mya","みゅ"=>"myu","みょ"=>"myo",
            "りゃ"=>"rya","りゅ"=>"ryu","りょ"=>"ryo",
            "ぎゃ"=>"gya","ぎゅ"=>"gyu","ぎょ"=>"gyo",
            "びゃ"=>"bya","びゅ"=>"byu","びょ"=>"byo",
            "ぴゃ"=>"pya","ぴゅ"=>"pyu","ぴょ"=>"pyo",
            "ふぁ"=>"fa","ふぃ"=>"fi","ふぇ"=>"fe","ふぉ"=>"fo",
            "じゃ"=>"ja","じゅ"=>"ju","じょ"=>"jo",
            "てぃ"=>"teli",
            "でゅ"=>"delyu",
            "っか"=>"kka","っき"=>"kki","っく"=>"kku","っけ"=>"kke","っこ"=>"kko",
            "っさ"=>"ssa","っし"=>"ssi","っす"=>"ssu","っせ"=>"sse","っそ"=>"sso",
            "った"=>"tta","っち"=>"tti","っつ"=>"ttu","って"=>"tte","っと"=>"tto",
            "っは"=>"hha","っひ"=>"hhi","っふ"=>"ffu","っへ"=>"hhe","っほ"=>"hho",
            "っま"=>"mma","っみ"=>"mmi","っむ"=>"mmu","っめ"=>"mme","っも"=>"mmo",
            "っら"=>"rra","っり"=>"rri","っる"=>"rru","っれ"=>"rre","っろ"=>"rro",
            "っが"=>"gga","っぎ"=>"ggi","っぐ"=>"ggu","っげ"=>"gge","っご"=>"ggo",
            "っざ"=>"zza","っじ"=>"zzi","っず"=>"zzu","っぜ"=>"zze","っぞ"=>"zzo",
            "っだ"=>"dda","っぢ"=>"ddi","っづ"=>"ddu","っで"=>"dde","っど"=>"ddo",
            "っぱ"=>"ppa","っぴ"=>"ppi","っぷ"=>"ppu","っぺ"=>"ppe","っぽ"=>"ppo",
            "っきゃ"=>"kkya",
            "っしゃ"=>"ssya",
            "っちゃ"=>"ttya",
            "っみゃ"=>"mmya",
            "っりゃ"=>"rrya",
            "っぎゃ"=>"ggya",
            "っじゃ"=>"jja",
            "っぢゃ"=>"ddya",
            "っぴゃ"=>"ppya",
            "っきゅ"=>"kkyu",
            "っしゅ"=>"ssyu",
            "っちゅ"=>"ttyu",
            "っみゃ"=>"mmya",
            "っりゅ"=>"rryu",
            "っぎゅ"=>"ggyu",
            "っじゅ"=>"jju",
            "っぢゅ"=>"ddyu",
            "っぴゃ"=>"ppya",
            "っきょ"=>"kkyo",
            "っしょ"=>"ssyo",
            "っちょ"=>"ttyo",
            "っみょ"=>"mmyo",
            "っりょ"=>"rryo",
            "っぎょ"=>"ggyo",
            "っじょ"=>"jjo",
            "っぢょ"=>"ddyo",
            "っぴょ"=>"ppyo",
            "ってぃ"=>"tteli",
            "ー"=>"-","。"=>".", "、"=>",",
            "んか"=>"nnka","んき"=>"nnki","んく"=>"nnku","んけ"=>"nnke","んこ"=>"nnko",
            "んさ"=>"nnsa","んし"=>"nnsi","んす"=>"nnsu","んせ"=>"nnse","んそ"=>"nnso",
            "んた"=>"nnta","んち"=>"nnti","んつ"=>"nntu","んて"=>"nnte","んと"=>"nnto",
            "んは"=>"nnha","んひ"=>"nnhi","んふ"=>"nnfu","んへ"=>"nnhe","んほ"=>"nnho",
            "んま"=>"nnma","んみ"=>"nnmi","んむ"=>"nnmu","んめ"=>"nnme","んも"=>"nnmo",
            "んや"=>"nnya","んゆ"=>"nnyu","んよ"=>"nnyo",
            "んら"=>"nnra","んり"=>"nnri","んる"=>"nnru","んれ"=>"nnre","んろ"=>"nnro",
            "んわ"=>"nnwa","んを"=>"nnwo",
            "んが"=>"nnga","んぎ"=>"nngi","んぐ"=>"nngu","んげ"=>"nnge","んご"=>"nngo",
            "んざ"=>"nnza","んじ"=>"nnji","んず"=>"nnzu","んぜ"=>"nnze","んぞ"=>"nnzo",
            "んだ"=>"nnda","んぢ"=>"nndi","んづ"=>"nndu","んで"=>"nnde","んど"=>"nndo",
            "んば"=>"nnba","んび"=>"nnbi","んぶ"=>"nnbu","んべ"=>"nnbe","んぼ"=>"nnbo",
            "んぱ"=>"nnpa","んぴ"=>"nnpi","んぷ"=>"nnpu","んぺ"=>"nnpe","んぽ"=>"nnpo",
            "んきゃ"=>"nnkya","んきゅ"=>"nnkyu","んきょ"=>"nnkyo",
            "んしゃ"=>"nnsya","んしゅ"=>"nnsyu","んしょ"=>"nnsyo",
            "んちゃ"=>"nntya","んちゅ"=>"nntyu","んちょ"=>"nntyo",
            "んひゃ"=>"nnhya","んひゅ"=>"nnhyu","んひょ"=>"nnhyo",
            "んみゃ"=>"nnmya","んみゅ"=>"nnmyu","んみょ"=>"nnmyo",
            "んりゃ"=>"nnrya","んりゅ"=>"nnryu","んりょ"=>"nnryo",
            "んぎゃ"=>"nngya","んぎゅ"=>"nngyu","んぎょ"=>"nngyo",
            "んびゃ"=>"nnbya","んびゅ"=>"nnbyu","んびょ"=>"nnbyo",
            "んぴゃ"=>"nnpya","んぴゅ"=>"nnpyu","んぴょ"=>"nnpyo",
            "んふぁ"=>"nnfa","んふぃ"=>"nnfi", "んふぇ"=>"nnfe","んふぉ"=>"nnfo",
            "んじゃ"=>"nnja","んじゅ"=>"nnju","んじょ"=>"nnjo",
            "んてぃ"=>"nnteli",
            "んでゅ"=>"nndelyu",
            "んー"=>"nn-","ん。"=>"nn.", "ん、"=>"nn,",
        ];
        return $wordsArray;
    }


    
    public function index() {
        $words = Word::latest()->paginate(60);
        return view('words.index')->with('words', $words);
    }
    public function show(Word $word) {
        return view('words.show')->with('word', $word);
    }
    public function create() {
        return view('words.create');
    }
    public function store(WordRequest $request) {
        $word = new Word();
        $word->word1 = $request->word1;
        $word->word2 = $request->word2;
        $string = "";
        $test = get_ja_arr($request->word2);
        for($i=0; $i<count($test); $i++) {
            if(!isset(WordsController::getArray()[$test[$i]])){
                return redirect('/word');;
            } 
            $string .= WordsController::getArray()[$test[$i]];
        }
        $word->level = mb_strlen($string, 'UTF-8');  
        $word->save();
        return redirect('/word');
    }
    public function edit(Word $word) {
        return view('words.edit')->with('word', $word);
    }
    public function update(WordRequest $request, Word $word) {
        $word->word1 = $request->word1;
        $word->word2 = $request->word2;
        $string = "";
        $test = get_ja_arr($request->word2);
        for($i=0; $i<count($test); $i++) {
            if(!isset(WordsController::getArray()[$test[$i]])){
                return redirect('/word');;
            } 
            $string .= WordsController::getArray()[$test[$i]];
        }
        $word->level = mb_strlen($request->word2, 'UTF-8');
        $word->save();
        return redirect('/word');
    }
    public function destroy(Word $word) {
        $word->delete();
        return redirect('/word');
    }
}

function get_ja_arr($str) {
    $array = [];
    $string = "";
    $prev_char = "";
    $next_char = "";
    for($i=0; $i<mb_strlen($str); $i++) {   
        if(!$i-1 < 0) {
            $prev_char = mb_substr($str,$i-1,1);
        }
        $curr_char = mb_substr($str,$i,1);
        if($i+1 > mb_strlen($str)){
            break;
        }
        $next_char = mb_substr($str,$i+1,1);
        if($curr_char === "ぁ"
        || $curr_char === "ぃ"
        || $curr_char === "ぅ"
        || $curr_char === "ぇ"
        || $curr_char === "ぉ"
        || $curr_char === "ゃ"
        || $curr_char === "ゅ"
        || $curr_char === "ょ"
        || $curr_char === "っ") {//最初外す　きゃっと
            continue;
        }
        if($next_char === "ぁ"
        || $next_char === "ぃ"
        || $next_char === "ぅ"
        || $next_char === "ぇ"
        || $next_char === "ぉ"
        || $next_char === "ゃ"
        || $next_char === "ゅ"
        || $next_char === "ょ") {//次の文字が～だったら　きゃっと
            array_push($array, $curr_char . $next_char);
        }else {
            array_push($array, $curr_char);
        }
        if($prev_char === "っ") {
            array_pop($array);
            if($next_char === "ぁ"
            || $next_char === "ぃ"
            || $next_char === "ぅ"
            || $next_char === "ぇ"
            || $next_char === "ぉ"
            || $next_char === "ゃ"
            || $next_char === "ゅ"
            || $next_char === "ょ") {
                array_push($array, $prev_char . $curr_char . $next_char);
            }else {
                array_push($array, $prev_char . $curr_char);
            }
        }
        
        if($prev_char === "ん") {
            if($curr_char === "あ"
            || $curr_char === "い"
            || $curr_char === "う"
            || $curr_char === "え"
            || $curr_char === "お"
            || $curr_char === "な"
            || $curr_char === "に"
            || $curr_char === "ぬ"
            || $curr_char === "ね"
            || $curr_char === "の") {
                continue;
            }else {
                array_pop($array);
                array_pop($array);
                if($next_char === "ぁ"
                || $next_char === "ぃ"
                || $next_char === "ぅ"
                || $next_char === "ぇ"
                || $next_char === "ぉ"
                || $next_char === "ゃ"
                || $next_char === "ゅ"
                || $next_char === "ょ") {    
                    array_push($array, $prev_char . $curr_char . $next_char);
                }else {
                    array_push($array, $prev_char . $curr_char);
                }
            }
        }
    }
    return $array;
}