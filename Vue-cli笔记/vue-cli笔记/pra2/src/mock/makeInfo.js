const Mock = require('mockjs');

export const getUserInfo = () => {
    var users = []
    for (let i = 0; i < 20; i++) {
        var obj = Mock.mock({
            id: i,
            name: "@cname()",
            age:Math.floor(Math.random()*100+1),
            gender:function(){
                let flag = 0;
                let num = Math.random()*100;
                if( num <= 50){
                    flag = 1;
                }else{
                    flag = 0
                }
                return flag;
            },
        })
        users.push(obj);
    }
    return Mock.mock(users)
}
