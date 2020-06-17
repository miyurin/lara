$(function() {
    'use strict';
    
    let kana = {
        "あ":["a"],"い":["i"],"う":["u"],"え":["e"],"お":["o"],
        "か":["ka","ca"],"き":["ki"],"く":["ku","cu","qu"],"け":["ke"],"こ":["ko","co"],
        "さ":["sa"],"し":["si","ci","shi"],"す":["su"],"せ":["se","ce"],"そ":["so"],
        "た":["ta"],"ち":["ti","chi"],"つ":["tu","tsu"],"て":["te"],"と":["to"],
        "な":["na"],"に":["ni"],"ぬ":["nu"],"ね":["ne"],"の":["no"],
        "は":["ha"],"ひ":["hi"],"ふ":["fu","hu"],"へ":["he"],"ほ":["ho"],
        "ま":["ma"],"み":["mi"],"む":["mu"],"め":["me"],"も":["mo"],
        "や":["ya"],"ゆ":["yu"],"よ":["yo"],
        "ら":["ra"],"り":["ri"],"る":["ru"],"れ":["re"],"ろ":["ro"],
        "わ":["wa"],"を":["wo"],"ん":["nn"],
        "が":["ga"],"ぎ":["gi"],"ぐ":["gu"],"げ":["ge"],"ご":["go"],
        "ざ":["za"],"じ":["ji","zi"],"ず":["zu"],"ぜ":["ze"],"ぞ":["zo"],
        "だ":["da"],"ぢ":["di"],"づ":["du"],"で":["de"],"ど":["do"],
        "ば":["ba"],"び":["bi"],"ぶ":["bu"],"べ":["be"],"ぼ":["bo"],
        "ぱ":["pa"],"ぴ":["pi"],"ぷ":["pu"],"ぺ":["pe"],"ぽ":["po"],
        "ぁ":["la","xa"],"ぃ":["li","xi"],"ぅ":["lu","xu"],"ぇ":["le","xe"],"ぉ":["lo","xo"],
        "きゃ":["kya"],"きゅ":["kyu"],"きょ":["kyo",],
        "しゃ":["sya","sha"],"しゅ":["syu","shu"],"しょ":["syo","sho"],
        "ちゃ":["tya","cha","cya"],"ちゅ":["tyu","chu","cyu"],"ちょ":["tyo","cyo","cho"],
        "にゃ":["nya"],"にゅ":["nyu"],"にょ":["nyo"],
        "ひゃ":["hya"],"ひゅ":["hyu"],"ひょ":["hyo"],
        "みゃ":["mya"],"みゅ":["myu"],"みょ":["myo"],
        "りゃ":["rya"],"りゅ":["ryu"],"りょ":["ryo"],
        "ぎゃ":["gya"],"ぎゅ":["gyu"],"ぎょ":["gyo"],
        "びゃ":["bya"],"びゅ":["byu"],"びょ":["byo"],
        "ぴゃ":["pya"],"ぴゅ":["pyu"],"ぴょ":["pyo"],
        "ふぁ":["fa",],"ふぃ":["fi"],"ふぇ":["fe"],"ふぉ":["fo"],
        "じゃ":["ja","zya"],"じゅ":["ju","zyu"],"じょ":["jo","zyo"],
        "てぃ":["teli","texi","thi"],
        "でゅ":["delyu","dexyu"],
        "っか":["kka"],"っき":["kki"],"っく":["kku"],"っけ":["kke"],"っこ":["kko"],
        "っさ":["s0sa"],"っし":["ssi","sshi"],"っす":["ssu"],"っせ":["sse"],"っそ":["sso"],
        "った":["tta"],"っち":["tti","cchi"],"っつ":["ttu","ttsu"],"って":["tte"],"っと":["tto"],
        "っは":["hha"],"っひ":["hhi"],"っふ":["ffu","hhu"],"っへ":["hhe"],"っほ":["hho"],
        "っま":["mma"],"っみ":["mmi"],"っむ":["mmu"],"っめ":["mme"],"っも":["mmo"],
        "っら":["rra"],"っり":["rri"],"っる":["rru"],"っれ":["rre"],"っろ":["rro"],
        "っが":["gga"],"っぎ":["ggi"],"っぐ":["ggu"],"っげ":["gge"],"っご":["ggo"],
        "っざ":["zza"],"っじ":["zzi","jji"],"っず":["zzu"],"っぜ":["zze"],"っぞ":["zzo"],
        "っだ":["dda"],"っぢ":["ddi"],"っづ":["ddu"],"っで":["dde"],"っど":["ddo"],
        "っぱ":["ppa"],"っぴ":["ppi"],"っぷ":["ppu"],"っぺ":["ppe"],"っぽ":["ppo"],
        "っきゃ":["kkya"],
        "っしゃ":["ssya","ssha"],
        "っちゃ":["ttya","ccha"],
        "っみゃ":["mmya"],
        "っりゃ":["rrya"],
        "っぎゃ":["ggya"],
        "っじゃ":["jja","zzya"],
        "っぢゃ":["ddya"],
        "っぴゃ":["ppya"],
        "っきゅ":["kkyu"],
        "っしゅ":["ssyu","sshu"],
        "っちゅ":["ttyu","cchu"],
        "っみゃ":["mmya"],
        "っりゅ":["rryu"],
        "っぎゅ":["ggyu"],
        "っじゅ":["jju","zzyu"],
        "っぢゅ":["ddyu"],
        "っぴゃ":["ppya"],
        "っきょ":["kkyo"],
        "っしょ":["ssyo","ssho"],
        "っちょ":["ttyo","ccho"],
        "っみょ":["mmyo"],
        "っりょ":["rryo"],
        "っぎょ":["ggyo"],
        "っじょ":["jjo","zzyo"],
        "っぢょ":["ddyo"],
        "っぴょ":["ppyo"],
        "ってぃ":["tteli"],
        "ー":["-"],"。":["."], "、":[","],
        "んか":["nnka","nnca","nka","nca"],"んき":["nnki","nki"],"んく":["nnku","nncu","nnqu","nku","ncu","nqu"],"んけ":["nnke","nke"],"んこ":["nnko","nnco","nko","nco"],
        "んさ":["nnsa","nsa"],"んし":["nnsi","nnci","nnshi","nsi","nci","nshi"],"んす":["nnsu","nsu"],"んせ":["nnse","nnce","nse","nce"],"んそ":["nnso","nso"],
        "んた":["nnta","nta"],"んち":["nnti","nnchi","nti","nchi"],"んつ":["nntu","nntsu","ntu","ntsu"],"んて":["nnte","nte"],"んと":["nnto","nto"],
        "んは":["nnha","nha"],"んひ":["nnhi","nhi"],"んふ":["nnfu","nnhu","nfu","nhu"],"んへ":["nnhe","nhe"],"んほ":["nnho","nho"],
        "んま":["nnma","nma"],"んみ":["nnmi","nmi"],"んむ":["nnmu","nmu"],"んめ":["nnme","nme"],"んも":["nnmo","nmo"],
        "んや":["nnya","nya"],"んゆ":["nnyu","nyu"],"んよ":["nnyo","nyo"],
        "んら":["nnra","nra"],"んり":["nnri","nri"],"んる":["nnru","nru"],"んれ":["nnre","nre"],"んろ":["nnro","nro"],
        "んわ":["nnwa","nwa"],"んを":["nnwo","nwo"],
        "んが":["nnga","nga"],"んぎ":["nngi","ngi"],"んぐ":["nngu","ngu"],"んげ":["nnge","nge"],"んご":["nngo","ngo"],
        "んざ":["nnza","nza"],"んじ":["nnji","nnzi","nji","nzi"],"んず":["nnzu","nzu"],"んぜ":["nnze","nze"],"んぞ":["nnzo","nzo"],
        "んだ":["nnda","nda"],"んぢ":["nndi","ndi"],"んづ":["nndu","ndu"],"んで":["nnde","nde"],"んど":["nndo","ndo"],
        "んば":["nnba","nba"],"んび":["nnbi","nbi"],"んぶ":["nnbu","nbu"],"んべ":["nnbe","nbe"],"んぼ":["nnbo","nbo"],
        "んぱ":["nnpa","npa"],"んぴ":["nnpi","npi"],"んぷ":["nnpu","npu"],"んぺ":["nnpe","npe"],"んぽ":["nnpo","npo"],
        "んきゃ":["nnkya","nkya"],"んきゅ":["nnkyu","nkyu"],"んきょ":["nnkyo","nkyo"],
        "んしゃ":["nnsya","nnsha","nsya","nsha"],
        "んしゅ":["nnsyu","nnshu","nsyu","nshu"],
        "んしょ":["nnsyo","nnsho","nsyo","nsho"],
        "んちゃ":["nntya","nncha","nncya","ntya","ncha","ncya"],
        "んちゅ":["nntyu","nnchu","nncyu","ntyu","nchu","ncyu"],
        "んちょ":["nntyo","nncyo","nncho","ntyo","ncyo","ncho"],
        "んひゃ":["nnhya","nhya"],"んひゅ":["nnhyu","nhyu"],"んひょ":["nnhyo","nhyo"],
        "んみゃ":["nnmya","nmya"],"んみゅ":["nnmyu","nmyu"],"んみょ":["nnmyo","nmyo"],
        "んりゃ":["nnrya","nrya"],"んりゅ":["nnryu","nryu"],"んりょ":["nnryo","nryo"],
        "んぎゃ":["nngya","ngya"],"んぎゅ":["nngyu","ngyu"],"んぎょ":["nngyo","ngyo"],
        "んびゃ":["nnbya","nbya"],"んびゅ":["nnbyu","nbyu"],"んびょ":["nnbyo","nbyo"],
        "んぴゃ":["nnpya","npya"],"んぴゅ":["nnpyu","npyu"],"んぴょ":["nnpyo","npyo"],
        "んふぁ":["nnfa","nfa"],
        "んふぃ":["nnfi","nfi"],
        "んふぇ":["nnfe","nfe"],
        "んふぉ":["nnfo","nfo"],
        "んじゃ":["nnja","nnzya","nja","nzya"],
        "んじゅ":["nnju","nnzyu","nju","nzyu"],
        "んじょ":["nnjo","nnzyo","njo","nzyo"],
        "んてぃ":["nnteli","nntexi","nnthi","nthi"],
        "んでゅ":["nndelyu","nndexyu","ndelyu","ndexyu"],
        "んー":["nn-","n-"],"ん。":["nn.","n."], "ん、":["nn,","n,"],
    };

    let next = 0;
    let word = "";
    let ja_arr = [];
    let loc = 0;
    let str = "";
    let score = 0;
    let miss = 0;
    let cnt = 0;
    let romanArray = [];
    let testArray = [];
    let isPlaying = false;
    let bossFlag = 100;
    let m;
    let p;
    let arr = [];
    let start = 0;
    let diff = 0;
    let s = 0;
    let initPlayerHp;
    let initEnemyHp;
    let invalid = 0;
    let critical = 0;
    let isDead = false;
    let zako;
    let random;
    let count = 0;
    let arrayIndex = [];
    let arrayIndexTest = [];

    
    class Player {
        constructor(hp,power) {
            this.hp = hp;
            this.power = power;
        }
        setHp(hp) {
            this.hp = hp;
        }
        getHp() {
            return this.hp;
        }
        setPower(power) {
            this.power = power;
        }
        getPower() {
            return this.power;
        }
    }

    class Zako {
        constructor(hp,power,image,color,imageTest) {
            this.hp = hp;
            this.power = power;
            this.image = image;
            this.color = color;
            this.imageTest = imageTest;
        }

        setHp(hp) {
            this.hp = hp;
        }

        getHp() {
            return this.hp;
        }

        setColor(color) {
            this.color = color;
        }

        getColor() {
            return this.color;
        }
        
        setImageTest(imageTest) {
            this.imageTest = imageTest;
        }

        getImageTest() {
            return this.imageTest;
        }

        setImage(array) {
            // let rand = random;
            // random = Math.floor(Math.random() * (this.color.length));
            // if(rand === random) {
            //     this.setImage(array);
            // }
            // for(let i=0; i<array.length; i++) {
            //     $(".enemy").eq(i).css("background-color", this.color[random]);
            // }

        }

        getZakoIndex(array) {
            let arr = [];
            for(let i=0; i<array.length; i++) {
                let random = Math.floor(Math.random()*(this.color.length));
                arr.push(random);
            }
            return arr;
        }

        getZakoIndexTest(array) {
            let arr = [];
            for(let i=0; i<array.length; i++) {
                let random = Math.floor(Math.random()*(this.imageTest.length));
                arr.push(random);
            }
            return arr;
        }
        setMessage() {
            console.log(this.color[random] + "が現れた!!!");
        }
    }

    const target = document.getElementById('target');
    const hiragana = document.getElementById('hiragana');
    const reading = document.getElementById('reading');
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');
    const v = document.getElementById('video');
    
    
    zako = new Zako(1,1,"zako",["red", "orange", "yellow", "green", "blue", "purple", "black"],[1,2,3,4,5,6,7,8,9,10,11,12]);
    p = new Player(1500000,10);
    initPlayerHp = p.hp;

    window.addEventListener('keyup', e => {
        if (isPlaying === true) {
            return;
        }
        
        if(e.key === "Enter") { //Enterが押されたときの初期状態を設定
            isPlaying = true;
            word = words[next].word2; //ターゲットのかな文字を取得
            target.textContent = words[next].word1;
            hiragana.textContent = words[next].word2;
            ja_arr = sepaJa(word); //かな文字を分解した配列を取得
            $("#reading").html(setElement(ja_arr)); //reading id デフォルトローマ字を設定
            arrayIndex = zako.getZakoIndex(ja_arr);
            arrayIndexTest = zako.getZakoIndexTest(ja_arr);
            console.log(arrayIndex);
            console.log(arrayIndexTest);
            $(".enemy-area").empty().css("left", "0");
            let elm = "";
            for(let i=0; i<arrayIndex.lengtBKh; i++) {
                elm += "<div class=\"enemy\"><p class=\"zako\" style=\"background-color:"+ zako.color[arrayIndex[i]]+";\"><img src=\"images/"+zako.imageTest[arrayIndexTest[i]]+".png\""+"</p></div>";
            }
            $(".enemy-area").append(elm).hide().fadeIn(200);
        }
    });
    
    window.addEventListener('keydown', e => { //ゲームが始まっていたら キー入力が表示される
        
        if (isPlaying === false) {
            return;
        }

        if((e.key).length > 1) { //キーを入力してそのキーの文字列が１より大きい場合以外は反映されない
            return;
        }
        word = words[next].word2;
        ja_arr = sepaJa(word);
        romanArray = kana[ja_arr[loc]]; //ひらがな全体のloc番目のローマ字を設定
        
        let key = e.key;
        console.log(key);
        str += key; //key入力
        
        testArray = [];
        testArray = filtering(str, romanArray); //romaArrayと現在タイピングが部分一致していたらtestArrayに配列を格納
        
        if(testArray.length === 0) { //絞り込んだtestArrayの個数が0、部分一致が一つもないときはstr変数を１文字だけ戻しつつ、ミスが反映される
            str = str.slice(0, -1);
            miss++;
            invalid++;
        }else {
            cnt++;
            score++;
            s++;
            updatedTarget(cnt, loc);
            if(testArray[0] === str) { //testArrayの部分文字がstrの文字数と同じだったら
                
                
                cnt = 0; //カウントを0に初期化
                str = ""; //str初期化
                $(".enemy").eq(0).fadeOut(10, ()=>{
                    $(".enemy").eq(0).remove();
                    loc++; //次のtestArrayに映るためのインクリメント
                    if(ja_arr.length === loc) {
                        loc = 0;
                        next++;
                        if(words.length === next) {
                            next = 0;
                        }
                        console.log(next);
                        console.log(words.length);
                        word = words[next].word2;
                        ja_arr = sepaJa(word);
                        $("#reading").html(setElement(ja_arr));
                        arrayIndex = zako.getZakoIndex(ja_arr);
                        arrayIndexTest = zako.getZakoIndexTest(ja_arr);
                        $(".enemy-area").empty().css("left", "0");
                        let elm = "";
                        for(let i=0; i<arrayIndex.length; i++) {
                            elm += "<div class=\"enemy\"><p class=\"zako\" style=\"background-color:"+ zako.color[arrayIndex[i]]+";\"><img src=\"images/"+zako.imageTest[arrayIndexTest[i]]+".png\"></p></div>";
                        }
                        $(".enemy-area").append(elm);
                        target.textContent = words[next].word1;
                        hiragana.textContent = words[next].word2;
                        scoreLabel.textContent = score;
                        missLabel.textContent = miss;
                    }
                });
            }
        }
    });

    function createElem(number) {
        let str = "";
        for(let i=0; i<number; i++) {
            str += "<div class=\"enemy-area\"></div>"
        }
        return str;
    }
    
    
    function setElement(array) {
        let string = "";
        for(let i=0; i<array.length; i++) {
            string += "<span class=\"e"+i+"\">";
            for(let t=0; t<kana[array[i]][0].length; t++) {
                string += "<span>"+ kana[array[i]][0][t] +"</span>";
            }
            string += "</span>";
        }
        return string;
    }
    
    function setSpan(string) {
        let str = "";
        for(let i=0; i<string.length; i++) {
            str += "<span>"+ string[i] +"</span>";
        }
        return str;
    }
    
    function updatedTarget(count,location) {
        let s = $(".e"+loc).html();
        s = s.replace(s, testArray[0]);
        $(".e"+loc).html(setSpan(s));
        for(let i=0; i<count; i++) {
            $(".e"+location+" span").eq(i).addClass("finish");
        }
    }
    
    function filtering(string,array) {
        let arr = [];
        for(let i=0; i<array.length; i++) {
            if(!array[i].indexOf(string)) { 
                arr.push(array[i]);
            }
        }
        return arr;
    }
    
    function sepaJa(string) {
        let array = [];
        for(let i=0; i<string.length; i++) {
            let prev_char = string[i-1];
            let curr_char = string[i];
            let next_char = string[i+1];
            if(curr_char === "ぁ"
            || curr_char === "ぃ"
            || curr_char === "ぅ"
            || curr_char === "ぇ"
            || curr_char === "ぉ"
            || curr_char === "ゃ"
            || curr_char === "ゅ"
            || curr_char === "ょ"
            || curr_char === "っ") {
                continue;
            }
            if(next_char === "ぁ"
            || next_char === "ぃ"
            || next_char === "ぅ"
            || next_char === "ぇ"
            || next_char === "ぉ"
            || next_char === "ゃ"
            || next_char === "ゅ"
            || next_char === "ょ") {
                array.push(curr_char + next_char);
            }else {
                array.push(curr_char);
            }
            
            if(prev_char === "っ") {
                array.pop();
                if(next_char === "ぁ"
                || next_char === "ぃ"
                || next_char === "ぅ"
                || next_char === "ぇ"
                || next_char === "ぉ"
                || next_char === "ゃ"
                || next_char === "ゅ"
                || next_char === "ょ") {
                    array.push(prev_char + curr_char + next_char);
                }else {
                    array.push(prev_char + curr_char);
                }
            }
            
            if(prev_char === "ん") {
                if(curr_char === "あ"
                || curr_char === "い"
                || curr_char === "う"
                || curr_char === "え"
                || curr_char === "お"
                || curr_char === "な"
                || curr_char === "に"
                || curr_char === "ぬ"
                || curr_char === "ね"
                || curr_char === "の") {
                    continue;
                }else {
                    array.pop();
                    array.pop();
                    if(next_char === "ぁ"
                    || next_char === "ぃ"
                    || next_char === "ぅ"
                    || next_char === "ぇ"
                    || next_char === "ぉ"
                    || next_char === "ゃ"
                    || next_char === "ゅ"
                    || next_char === "ょ") {    
                        array.push(prev_char + curr_char + next_char);
                    }else {
                        array.push(prev_char + curr_char);
                    }
                }
            }
        }
        return array;
    }
    
    function shuffle(array) {
        let n = array.length;
        let t;
        let i;
        while (n) {
            i = Math.floor(Math.random() * n--);
            t = array[n];
            array[n] = array[i];
            array[i] = t;
        }
        return array;
    }
});

// if(isDead == true) {
    //     p = new Player(1500000,10);
    //     isDead = false;
    // }
    // if(bossFlag === 0) {
        //     m = new Monster(1000,1,0,4,"goburin.png");
        //     initEnemyHp = m.hp;
        //     m.setImage();
        //     arr = m.getLevelWordsShuffle(words);
        // }
        // if(bossFlag === 1) {
            //     m = new Monster(1200,3,5,6,"ooku.png");
            //     initEnemyHp = m.hp;
            //     m.setImage();
            //     arr = m.getLevelWordsShuffle(words);
            // }
            // if(bossFlag === 2) {
                //     m = new Monster(1500,5,7,8,"oni.png");
                //     initEnemyHp = m.hp;
                //     m.setImage();
                //     arr = m.getLevelWordsShuffle(words);
                // }
                // if(bossFlag === 3) {
                    //     m = new Monster(5000,7,9,13,"kaibutu.png");
                    //     initEnemyHp = m.hp;
                    //     m.setImage();
                    //     arr = m.getLevelWordsShuffle(words);
                                                                                                            // class Monster {
                                                                                                            //     constructor(hp,power,fromLevel, toLevel, image) {
                                                                                                            //         this.hp = hp;
                                                                                                            //         this.power = power;
                                                                                                            //         this.fromLevel = fromLevel;
                                                                                                            //         this.toLevel = toLevel;
                                                                                                            //         this.image = image;
                                                                                                            //     }
                                                                                                            
                                                                                                            //     setHp(hp) {
                                                                                                            //         this.hp = hp;
                                                                                                            //     }
                                                                                                            
                                                                                                            //     getHp() {
                                                                                                            //         return this.hp;
                                                                                                            //     }
                                                                                                            
                                                                                                            //     getLevelWordsShuffle(array) {
                                                                                                            //         let arr = [];
                                                                                                            //         for(let i=0; i<array.length; i++) {
                                                                                                            //             if(!(array[i].level >= this.fromLevel && array[i].level <= this.toLevel)) {
                                                                                                            //                 continue;
                                                                                                            //             }
                                                                                                            //             arr.push(array[i]);
                                                                                                            //         }
                                                                                                            //         arr = shuffle(arr);
                                                                                                            //         return arr; //wordsテーブルのlevel～以上～以下取得
                                                                                                            //     }
                                                                                                            //     attack() {
                                                                                                            //         let dmg = this.power;
                                                                                                            //         return dmg;
                                                                                                            //     }
                                                                                                            //     setImage() {
                                                                                                            //         // $('.enemy').remove();
                                                                                                            //         // let img = '<img class="enemy" src="images/'+ this.image +'" alt="">';
                                                                                                            //         // $('.left').prepend(img);//htmlに敵キャラの画像を配置
                                                                                                            //     }
                                                                                                            // }
            // }
                    // if(invalid > 0) {
                    //     invalid = 0;
                    //     critical = 0;
                    //     p.setPower(10);
                    // }else {
                    //     critical++;
                    //     p.setPower(p.getPower() * critical);
                    //     p.setPower(10);
                    // }
                    // s = 0;
                    // if(p.hp <= 0) {
                    //     p.hp = 0;
                    //     target.textContent = "もう一度挑戦しますか?";
                    //     hiragana.textContent = "Enterを押して再開します";
                    //     reading.textContent = "ゲームオーバー!!!";
                    //     next = 0;
                    //     isPlaying = false;
                    //     bossFlag = 0;
                    //     isDead = true;
                    //     return;
                    // }
                    // if(word.length === next) {
                    //     next = 0;
                    // }