const inputName_1 = document.getElementById('name-1');
const inputName_2 = document.getElementById('name-2');
const resultButton = document.querySelector('.btn-style');
const bgFrame = document.querySelector('.bg-frame');
const resultCount = document.querySelector('.result-number');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const imgExplanation = document.querySelector('.img-explanation');
const inputName = document.querySelector('.input-name');

let elementList = [];
var mql = window.matchMedia('screen and (max-width: 500px)');
var mql_2 = window.matchMedia('screen and (max-width: 500px)');

console.log(resultButton);
// var onlyKorean = function() {
//   var pattern = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
//   this.value = this.value.replace(pattern, '');
//   alert("한글만 입력 가능합니다.");
// };
// inputName_1.addEventListener('keypress', onlyKorean);
// inputName_2.addEventListener('keypress', onlyKorean);

function setPadding(p1, p2, p3, p4) {
    $(elementList[0]).css('margin-top', p1);
    $(elementList[0]).children().css('padding', p2);

    for (let i = 1; i < elementList.length; i++) {
        $(elementList[i]).css('padding-bottom', p3);
        $(elementList[i]).children().css('padding', p4);
    }
}
function viewCheck(length) {
    // $('ul').children().css('padding', '0 2.5%');
    console.log(elementList);
    switch (length) {
        case 4:
            paddingSize(
                '10%',
                '0 3.8%',
                '2.2rem',
                '0 5.2%',
                '7.5%',
                '0 2.8%',
                '1rem',
                '0 4%',
                '7%',
                '0 3%',
                '0.8rem',
                '0 5%'
            );
            break;
        case 5:
            paddingSize(
                '5%',
                '0 3.8%',
                '2.3rem',
                '0 5.2%',
                '3%',
                '0 2.8%',
                '1.05rem',
                '0 4%',
                '3%',
                '0 3%',
                '0.65rem',
                '0 5%'
            );
            break;

        case 6:
            paddingSize(
                '8%',
                '0 2.5%',
                '1.4rem',
                '0 1.45rem',
                '5%',
                '0 1.8%',
                '0.5rem',
                '0 3%',
                '5%',
                '0 1.8%',
                '0.2rem',
                '0 3.3%'
            );
            break;
        case 7:
            paddingSize(
                '3.5%',
                '0 1.5%',
                '1.4rem',
                '0 1.05rem',
                '1%',
                '0 1%',
                '0.5rem',
                '0 2.2%',
                '1%',
                '0 1%',
                '0.2rem',
                '0 2.5%'
            );
            break;
        case 8:
            paddingSize(
                '3.5%',
                '0 1.5%',
                '0.9rem',
                '0 1.05rem',
                '1%',
                '0 0.8%',
                '0.2rem',
                '0 1.8%',
                '0.5%',
                '0 0.6%',
                '0',
                '0 2%'
            );
            break;
        default:
            console.log('6');
            break;
    }

    // console.log(ulElement.children);
}

function paddingSize(p1, p2, p3, p4, p_5_1, p_5_2, p_5_3, p_5_4, p_4_1, p_4_2, p_4_3, p_4_4) {
    if (mql.matches) {
        mql = window.matchMedia('screen and (max-width: 400px)');
        if (mql.matches) {
            //400px 보다 작을때
            console.log('화면의 너비가 400px 보다 작습니다.');
            setPadding(p_4_1, p_4_2, p_4_3, p_4_4);
        } else {
            //500px 보다 작을때
            console.log('화면의 너비가 500px 보다 작습니다.');
            setPadding(p_5_1, p_5_2, p_5_3, p_5_4);
        }
    } else {
        // 500px 보다 클때 default 값
        setPadding(p1, p2, p3, p4);
        console.log('원본');
        // content.setAttribute('style', 'padding:0 2.5%;');
    }

    mql_2.addListener(function (e) {
        if (e.matches) {
            //500px 보다 작아졌을 때
            setPadding(p_5_1, p_5_2, p_5_3, p_5_4);
            console.log('500');
            mql_2 = window.matchMedia('screen and (max-width: 400px)');
            mql_2.addListener(function (e) {
                if (e.matches) {
                    //400px 보다 작아졌을 때
                    setPadding(p_4_1, p_4_2, p_4_3, p_4_4);
                    console.log('400');
                } else {
                    //400px 보다 커졌을 때
                    setPadding(p_5_1, p_5_2, p_5_3, p_5_4);
                    console.log('500sss');
                }
            });
        } else {
            //원본 default 값
            setPadding(p1, p2, p3, p4);
            console.log('데스크탑 화면 입니다.');
        }
    });
}

resultButton.addEventListener('click', () => {
    let len_1 = inputName_1.value.length;
    let len_2 = inputName_2.value.length;
    let check = document.getElementsByClassName('count-list');
    let parents = document.getElementById('name-list');
    console.log(check.length);
    if (len_1 < 2 || len_1 > 4 || len_2 < 2 || len_2 > 4) {
        alert('이름은 최소 두 글자 최대 네 글자 입력 가능합니다.');
    } else {
        if (check.length != 0) {
            while (parents.hasChildNodes()) {
                parents.removeChild(parents.firstChild);
            }
        }

        fnCalculateLoveProphecy();
        btn1.style.display = 'none';
        // imgExplanation.style.display = 'none';
        inputName.style.visibility = 'hidden';
        btn2.style.display = 'inline-block';
    }
});

// 한글 자모 초성
var ChoSeong = new Array(
    // Unicode
    new Array(
        0x3131,
        0x3132,
        0x3134,
        0x3137,
        0x3138,
        0x3139,
        0x3141,
        0x3142,
        0x3143,
        0x3145,
        0x3146,
        0x3147,
        0x3148,
        0x3149,
        0x314a,
        0x314b,
        0x314c,
        0x314d,
        0x314e
    ),
    // 한글 자모
    new Array(
        'ㄱ',
        'ㄲ',
        'ㄴ',
        'ㄷ',
        'ㄸ',
        'ㄹ',
        'ㅁ',
        'ㅂ',
        'ㅃ',
        'ㅅ',
        'ㅆ',
        'ㅇ',
        'ㅈ',
        'ㅉ',
        'ㅊ',
        'ㅋ',
        'ㅌ',
        'ㅍ',
        'ㅎ'
    ),
    // 획수
    new Array(2, 4, 2, 3, 6, 5, 4, 4, 8, 2, 4, 1, 3, 6, 4, 4, 4, 4, 3)
);

// 한글 자모 중성
var JungSeong = new Array(
    // Unicode
    new Array(
        0x314f,
        0x3150,
        0x3151,
        0x3152,
        0x3153,
        0x3154,
        0x3155,
        0x3156,
        0x3157,
        0x3158,
        0x3159,
        0x315a,
        0x315b,
        0x315c,
        0x315d,
        0x315e,
        0x315f,
        0x3160,
        0x3161,
        0x3162,
        0x3163
    ),
    // 한글 자모
    new Array(
        'ㅏ',
        'ㅐ',
        'ㅑ',
        'ㅒ',
        'ㅓ',
        'ㅔ',
        'ㅕ',
        'ㅖ',
        'ㅗ',
        'ㅘ',
        'ㅙ',
        'ㅚ',
        'ㅛ',
        'ㅜ',
        'ㅝ',
        'ㅞ',
        'ㅟ',
        'ㅠ',
        'ㅡ',
        'ㅢ',
        'ㅣ'
    ),
    // 획수
    new Array(2, 3, 3, 4, 2, 3, 3, 4, 2, 4, 5, 3, 3, 2, 4, 5, 3, 3, 1, 2, 1)
);

// 한글 자모 종성
var JongSeong = new Array(
    // Unicode
    new Array(
        0x0000,
        0x3131,
        0x3132,
        0x3133,
        0x3134,
        0x3135,
        0x3136,
        0x3137,
        0x3139,
        0x313a,
        0x313b,
        0x313c,
        0x313d,
        0x313e,
        0x313f,
        0x3140,
        0x3141,
        0x3142,
        0x3144,
        0x3145,
        0x3146,
        0x3147,
        0x3148,
        0x314a,
        0x314b,
        0x314c,
        0x314d,
        0x314e
    ),
    // 한글 자모
    new Array(
        '',
        'ㄱ',
        'ㄲ',
        'ㄳ',
        'ㄴ',
        'ㄵ',
        'ㄶ',
        'ㄷ',
        'ㄹ',
        'ㄺ',
        'ㄻ',
        'ㄼ',
        'ㄽ',
        'ㄾ',
        'ㄿ',
        'ㅀ',
        'ㅁ',
        'ㅂ',
        'ㅄ',
        'ㅅ',
        'ㅆ',
        'ㅇ',
        'ㅈ',
        'ㅊ',
        'ㅋ',
        'ㅌ',
        'ㅍ',
        'ㅎ'
    ),
    // 획수
    new Array(0, 2, 4, 4, 2, 5, 5, 3, 5, 7, 9, 9, 7, 9, 9, 8, 4, 4, 6, 2, 4, 1, 3, 4, 3, 3, 4, 3)
);

var loveProphecy = new Array();

for (var i = 0; i < 3; i++) {
    loveProphecy[i] = new Array();

    for (var k = 0; k < 3; k++) {
        loveProphecy[i][k] = new Array();
    }
}

loveProphecy[0][0][0] = '☆☆☆ - 어쩔수 없이 사귀게 될사이..';
loveProphecy[0][0][1] = '☆☆♡ - 아름다운 천생연분';
loveProphecy[0][0][2] = '☆☆□ - 고생끝에 멋찌게..';
loveProphecy[0][1][0] = '☆♡☆ - 서로 다정하게 지낼수 있는사이';
loveProphecy[0][1][1] = '☆♡♡ - 열심히 노력해봐 ..';
loveProphecy[0][1][2] = '☆♡ㅁ - 하늘의 별이 되어줄 남자';
loveProphecy[0][2][0] = '☆□☆ - 남이 부러워할 정도로 다정한 사이..';
loveProphecy[0][2][1] = '☆□♡ - 아무리 노력해도 않되는 사이.. 꽝...';
loveProphecy[0][2][2] = '☆□□ - 아빠와 딸처럼 포근한 사이';
loveProphecy[1][0][0] = '♡☆☆ - 아주 짧은 사랑][불 같은 사랑';
loveProphecy[1][0][1] = '♡☆♡ - 장래를 꿈꿔도 될사이..';
loveProphecy[1][0][2] = '♡☆□ - 첫 끝발이 멍멍이 끝발..';
loveProphecy[1][1][0] = '♡♡☆ - 초면부터 정이 뚜욱...';
loveProphecy[1][1][1] = '♡♡♡ - 정말로 사랑하는 사이..';
loveProphecy[1][1][2] = '♡♡□ - 시작부터 원수..지간..';
loveProphecy[1][2][0] = '♡□☆ - 남자는 좋아하는데 여자는 별로...';
loveProphecy[1][2][1] = '♡□♡ - 좋으면서 싫은척..';
loveProphecy[1][2][2] = '♡ㅁㅁ - 서로를 위하는 천사 커플';
loveProphecy[2][0][0] = '□☆☆ - 하나도 안어울려';
loveProphecy[2][0][1] = '□☆♡ - 누가 머래도 친하고 싶은사이..';
loveProphecy[2][0][2] = '□☆□ - 슬픔의 연속 와장장 깨질 커플';
loveProphecy[2][1][0] = '□♡☆ - 비온담에 땅이 굳어질사이 절대 포기하지마... ';
loveProphecy[2][1][1] = '□♡♡ - 천생연분...';
loveProphecy[2][1][2] = '□♡□ - 잘되다가 깨질사이......';
loveProphecy[2][2][0] = '□□☆ - 가슴아픈사이..';
loveProphecy[2][2][1] = '□□♡ - 노력없이도 자연히 이루어질 사이..';
loveProphecy[2][2][2] = '□□□ - 한쌍의 바퀴벌레...';

function fnLoveProphecy(firstSum, secondSum, thirdSum) {
    var prophecyNumber1 = fnProphecyNumber(firstSum);
    var prophecyNumber2 = fnProphecyNumber(secondSum);
    var prophecyNumber3 = fnProphecyNumber(thirdSum);

    idFirstSum.innerHTML = firstSum;
    idSecondSum.innerHTML = secondSum;
    idThirdSum.innerHTML = thirdSum;
    idProphecyResult.innerHTML = loveProphecy[prophecyNumber1][prophecyNumber2][prophecyNumber3];
}

function fnProphecyNumber(sumValue) {
    switch (parseInt(sumValue)) {
        case 3:
        case 5:
        case 13:
        case 14:
        case 18:
            return 0; // 별
        case 1:
        case 2:
        case 7:
        case 8:
        case 10:
        case 11:
        case 15:
            return 1; // 하트
        case 4:
        case 6:
        case 9:
        case 12:
        case 16:
        case 17:
            return 2; // 네모
    }
}

var hangulToJaso = function (text) {
    var chars = new Array();
    var v = new Array();
    for (var i = 0; i < text.length; i++) {
        chars[i] = text.charCodeAt(i);
        if (chars[i] >= 0xac00 && chars[i] <= 0xd7a3) {
            var i1, i2, i3;
            i3 = chars[i] - 0xac00;
            i1 = i3 / (21 * 28);
            i3 = i3 % (21 * 28);
            i2 = i3 / 28;
            i3 = i3 % 28;
            v.push(String.fromCharCode(ChoSeong[0][parseInt(i1)]));
            v.push(String.fromCharCode(JungSeong[0][parseInt(i2)]));
            if (i3 != 0x0000) v.push(String.fromCharCode(JongSeong[0][parseInt(i3)]));
        } else {
            v.push(String.fromCharCode(chars[i]));
        }
    }
    return v;
};

function fnJasoStrokeCount(arrJaso, arrStrokeCountOfJaso, jaso) {
    if (chkUndefined(jaso)) {
        return 0;
    }

    for (var i = 0; i < arrJaso.length; i++) {
        if (jaso == arrJaso[i]) {
            return arrStrokeCountOfJaso[i];
        }
    }
}

function chkUndefined(arg) {
    return arg == undefined || arg == '' || arg == 'null';
}

function fnCalculateLoveProphecy() {
    var nameOne = inputName_1.value;
    var nameTwo = inputName_2.value;

    var arrNameOne = new Array();
    var arrNameTwo = new Array();

    for (var i = 0; i < nameOne.length; i++) {
        arrNameOne[i] = hangulToJaso(nameOne.substring(i, i + 1));
    }

    for (var i = 0; i < nameTwo.length; i++) {
        arrNameTwo[i] = hangulToJaso(nameTwo.substring(i, i + 1));
    }

    let ulElement = document.createElement('ul');
    ulElement.setAttribute('class', 'name-list');
    elementList.push(ulElement);
    document.getElementById('name-list').appendChild(ulElement);
    let num_1 = 0;
    let num_2 = 0;
    let lenTotal = nameOne.length + nameTwo.length;
    for (var i = 0; i < lenTotal; i++) {
        let liElement = document.createElement('li');
        if (i % 2 == 0) {
            liElement.setAttribute('class', 'name-red');
        } else {
            liElement.setAttribute('class', 'name-blue');
        }

        ulElement.appendChild(liElement);
        if (i % 2 == 0) {
            if (nameOne.substring(num_1, num_1 + 1) == '') {
                liElement.innerText = ' X ';
                lenTotal++;
            } else {
                liElement.innerText = nameOne.substring(num_1, num_1 + 1);
                num_1++;
            }
        } else {
            if (nameTwo.substring(num_2, num_2 + 1) == '') {
                liElement.innerText = ' X ';
                lenTotal++;
            } else {
                liElement.innerText = nameTwo.substring(num_2, num_2 + 1);
                num_2++;
            }
        }

        // viewCheck(liElement);
        // liElement.setAttribute('style', 'padding:0 2.5%;');
    }

    let ulElement_2 = document.createElement('ul');
    ulElement_2.setAttribute('class', 'count-list');
    elementList.push(ulElement_2);
    document.getElementById('name-list').appendChild(ulElement_2);
    num_1 = 0;
    num_2 = 0;
    lenTotal = nameOne.length + nameTwo.length;
    // console.log("aaa = "+arrNameOne.length)
    let numArray = [];
    for (var i = 0; i < lenTotal; i++) {
        let liElement_2 = document.createElement('li');
        ulElement_2.appendChild(liElement_2);
        if (i % 2 == 0) {
            if (arrNameOne.length <= num_1) {
                liElement_2.innerText = '0';
                lenTotal++;
                numArray.push(0);
            } else {
                liElement_2.innerText = fnCharacterStrokeCount(arrNameOne[num_1]);
                numArray.push(fnCharacterStrokeCount(arrNameOne[num_1]));
                num_1++;
            }
        } else {
            if (arrNameTwo.length <= num_2) {
                liElement_2.innerText = '0';
                lenTotal++;
                numArray.push(0);
            } else {
                liElement_2.innerText = fnCharacterStrokeCount(arrNameTwo[num_2]);
                numArray.push(fnCharacterStrokeCount(arrNameTwo[num_2]));
                num_2++;
            }
        }
    }

    let roof = true;
    let num = 3;
    let widthNum = 90;
    let paddingNum = 45;
    let resultNum = 0;
    while (roof) {
        eval('ulElement_' + num + "= document.createElement('ul')");
        eval('ulElement_' + num + ".setAttribute('class','count-list')");
        elementList.push(eval('ulElement_' + num));
        let lenCount = numArray.length;
        for (i = 0; i < lenCount - 1; i++) {
            let numSum = 0;
            eval('liElement_' + num + "= document.createElement('li')");
            eval('ulElement_' + num + '.appendChild(liElement_' + num + ')');
            numSum = Number(numArray[i]) + Number(numArray[i + 1]);
            if (numSum >= 10) {
                numSum = numSum - 10;
                eval('liElement_' + num + '.innerText = ' + numSum);
                numArray.push(numSum);
            } else {
                eval('liElement_' + num + '.innerText = ' + numSum);
                numArray.push(numSum);
            }
        }
        eval('ulElement_' + num + ".setAttribute('style','width:" + widthNum + "%;' )");
        eval("document.getElementById('name-list').appendChild(ulElement_" + num + ')');
        console.log(lenCount);
        numArray.splice(0, lenCount);
        if (numArray.length <= 2) {
            console.log(numArray);
            roof = false;
        }
        num++;
        widthNum = widthNum - 18;
        paddingNum = paddingNum + 50;
    }

    bgFrame.style.backgroundImage = `url("images/result-frame-${lenTotal}.png")`;

    viewCheck(lenTotal);
    resultNum = Number(numArray[0]) * 10 + Number(numArray[1]);
    imgExplanation.style.backgroundImage = `url("images/result-text-${numArray[0]}.png")`;
    imgExplanation.style.height = '120px';
    imgExplanation.style.backgroundSize = 'contain';
    imgExplanation.style.backgroundRepeat = 'no-repeat';
    resultCount.innerHTML = resultNum + '%';
    // resultText.innerHTML = inputName_1.value +"(A)씨는 "+inputName_2.value+"(B)씨를 "+resultNum+"% 사랑합니다."
    console.log(resultNum);
    // console.log(numArray)
}

function fnCharacterStrokeCount(source) {
    var strokeCount = 0;

    strokeCount += fnJasoStrokeCount(ChoSeong[1], ChoSeong[2], source[0]);
    strokeCount += fnJasoStrokeCount(JungSeong[1], JungSeong[2], source[1]);
    strokeCount += fnJasoStrokeCount(JongSeong[1], JongSeong[2], source[2]);

    return strokeCount;
}