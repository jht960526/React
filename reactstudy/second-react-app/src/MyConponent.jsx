import { Children, createContext, useContext } from "react";

// 기본값이 들어가지만 프로바이더의 value가 설정된다면 이값들은 무시가 된다.
const MyContext = createContext(null); 

// 프로바이더는 데이터를 공유하는 역할
export const MyProvider = ({children}) => {
    const value = {data : "hello world"};
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}


export const MyComponent = () => {
    const context = useContext(MyContext);
    return <div>{context.data}</div>
}
