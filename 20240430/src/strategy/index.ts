// interface
// 유저가 전달할 데이터 객체 구조 정의
interface IUserParams {
    email: string;
    password: string;
}

// 유저가 로그인을 요청하고 응답을 받았을 때
// AuthenticationResponse
// 유니온 or 타입을 두가지 이상 포함시킬 수 있다.
interface IAuthRes {
    success: boolean;
    // message 키가 있어도 되고 없어도 된다.
    message?: string | Error;
}

// 검증 객체 구조 정의
interface IAuth {
    // 로그인 검증을 하는 함수를 공통으로 주고
    authenticate(credentials: IUserParams): IAuthRes;
}

// 전략 패턴 객체 구조 정의
interface IStrategy {
    // key 문자열로 작성
    // 포함시킬 기능이 생길때마다 키를 추가하면서 값을 넣어줄 것.
    [key: string]: IAuth;
}

///////////////////////////////////////////////////////
// Strategy
///////////////////////////////////////////////////////

// 서비스에서 실행할 로직을 담당할 객체 구조 정의
class Strategy {
    private strategy: IStrategy = {};

    // 서비스 로직을 객체에 추가할 함수
    // 의존성 주입을 할 부분
    setStrategy(key: string, authenticate: IAuth) {
        // key 값을 받아서 key 추가하면서 로직 추가.
        this.strategy[key] = authenticate;
    }

    login(type: string, credentials: IUserParams): IAuthRes {
        // type === "kakao" credentials === {email : "", password : ""}
        const result = this.strategy[type].authenticate(credentials);
        return result;
    }
}

///////////////////////////////////////////////////////////////////////
// auth
///////////////////////////////////////////////////////////////////////

// 이메일 로그인 검증 클래스 정의
class EmailAuth implements IAuth {
    authenticate(credentials: IUserParams): IAuthRes {
        // credentials === 유저가 입력한 값
        // 조건문을 credentials 값으로 작성

        // 이메일 로직 부분 작성
        console.log("email 로그인 성공");
        // 성공 객체 반환
        return { success: true, message: "이메일 로그인 성공" };
    }
}

// 구글 로그인 검증 클래스 정의
class GoogleAuth implements IAuth {
    authenticate(credentials: IUserParams): IAuthRes {
        // 구글 로그인 로직 부분 작성
        console.log("google 로그인 실패");
        // Error : 에러 객체를 만들어준다.
        // 생성자에서 매개변수로 전달한 문자열을 가지고 객체를 생성한다.
        return { success: false, message: new Error("구글 로그인에서 에러 발생") }
    }
}

// 카카오 로그인 검증 클래스 정의
class KakaoAuth implements IAuth {
    authenticate(credentials: IUserParams): IAuthRes {
        // 카카오 로그인 로직 부분 작성
        console.log("kakao 로그인 성공")
        return { success: true };
    }
}

//////////////////////////////////////////////////////
// service
//////////////////////////////////////////////////////

class UserService {
    // 서비스들 기능들을 구조로 정의할 클래스
    // readonly 값을 읽기만 가능하고 수정할 수 없다.
    // 생성자 매개변수로 private readonly 매개변수 명까지 넣고 생성자를 호출하게 되면
    // 키 값은 strategy 전달한 매개변수로 객체에 키가 추가된다.
    constructor(private readonly strategy: Strategy) { }

    login(type: string, credentials: IUserParams): IAuthRes {
        const result = this.strategy.login(type, credentials);
        return result;
    }
}

//////////////////////////////////////////////////////////////
// controller
//////////////////////////////////////////////////////////////

// 유저 서비스 로직 실행 클래스 정의
class UserController {
    constructor(private readonly userService: UserService) { }

    signin(type: string) {
        const loginParams: IUserParams = {
            email: "goodlife@naver.com",
            password: "1234",
        }
        const result = this.userService.login(type, loginParams);
        console.log(result);
    }
}

// 전략 패턴 객체 생성
const strategy = new Strategy();
// { strategy : {}, setStrategy(), login() }

// 로그인 로직을 추가
strategy.setStrategy("email", new EmailAuth());
// { strategy : { "email" : EmailAuth { authenticate () } }, setStrategy(), login() }

// 카카오 로그인 로직 추가
strategy.setStrategy("kakao", new KakaoAuth());
// { strategy : { "kakao" : KakaoAuth { authenticate () }, "email" : EmailAuth{ authenticate () } }, setStrategy(), login() }

// 구글 로그인 로직 추가
strategy.setStrategy("google", new GoogleAuth());
// { strategy : { "google" : GoogleAuth { authenticate () }, "kakao" : KakaoAuth {authenticate () }, "email" : EmailAuth{ authenticate () } }, setStrategy(), login() }

// 새로운 로그인 로직이 하나 추가된다.
// 새로운 로직이 추가되면 기존의 코드는 수정할 필요가 없이 새로운 클래스 하나 만들어주면 된다.
// strategy.setStrategy("facebook", new GoogleAuth());

// 완성된 전략 패턴의 객체를 UserService 객체에 전달해서 생성
const userService = new UserService(strategy);

// 유저가 로그인 로직을 실행할 클래스 생성 userController
const userController = new UserController(userService);

// 유저가 로그인을 시도했다.
userController.signin("email");

// 중요하고 어려워..

// 고양이를 3마리를 만들건데
// 울음소리가 다 다른 고양이
// 사람이 말을 걸면 고양이가 웁니다.
// 한마리는 야옹, 한마리는 에옹, 한마리는 때껄룩

interface ICatParams {
    catname: string;
    catcry: string;
}

interface IAuthResmh {
    success: boolean;
    message?: string | Error;
}

interface IAuthmh {
    authenticatemh(credentials: ICatParams): IAuthResmh;
}

interface IStrategymh {
    [key: string]: IAuthmh;
}

class Strategymh {
    private strategymh: IStrategymh = {};

    setStrategymh(key: string, authenticatemh: IAuthmh) {
        this.strategymh[key] = authenticatemh;
    }

    login(type: string, credentials: ICatParams): IAuthResmh {
        const result = this.strategymh[type].authenticatemh(credentials);
        return result;
    }
}

class mhcat implements IAuthResmh {
    authenticatemh(credentials: ICatParams): IAuthResmh {
        console.log("야옹")
        return { success: true, message: "야옹" };
    }
}

class khcat implements IAuthResmh {
    authenticatemh(credentials: ICatParams): IAuthResmh {
        console.log("야옹")
        return { success: true, message: "에옹" };
    }
}

class kjcat implements IAuthResmh {
    authenticatemh(credentials: ICatParams): IAuthResmh {
        return { success: true, message: "떼껄룩" };
    }
}

class CatServices {
    constructor(private readonly strategymh: Strategymh) { }
    login(type: string, credentials: ICatParams): IAuthResmh {
        const result = this.strategymh.login(type, credentials);
        return result;
    }
}
