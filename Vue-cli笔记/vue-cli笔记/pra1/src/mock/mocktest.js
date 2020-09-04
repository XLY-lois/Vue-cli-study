const Mock = require('mockjs');

export const getUserInfo = () => {
    var users = []
    for (let i = 0; i < 20; i++) {
        var obj = Mock.mock({
            id: i,
            name: "@cname()",
            bir: "@date('MM-dd')",
            age:Math.floor(Math.random()*100)
        })
        users.push(obj);
    }
    return Mock.mock(users)
}
