import pkg from 'jsonwebtoken'
const {
    sign,
    verify
} = pkg;
// 密钥
const secret = 'g10bqw2345';
export default [
    {
        url:'/api/getUserInfo',
        method:'get',
        response:req => {
        // req ? token ? => decode => user?
        // http authorization ?
        // const token = req.
        // console.log(req.headers['authorization'].split(' ')[1],'/////////');
        const token = req.headers['authorization'].split(' ')[1];
        try{
            let decode = verify(token,secret);// 后端知道你是谁了
            // console.log(decode);
            return {
                code:200,
                data:decode 
            }
        } catch(err) {

        }
        return {
            user:'admin'
            //msg:'here'
        }
        }
    },
    {
        url:'/api/login',
        method:'post',
        timeout:2000,
        response:(req,res) => {
         let body = req.body
         //console.log(body);
         if(body.name!=='admin'||body.password!=='123456'){
            return {
                code:60204,
                msg:'用户名或密码错误'
            }
         }

         // 签发令牌 token
         const token = sign({user:body.name},secret,{
            expiresIn:60*60*24*7 //过期时间
         })
         return {
            code:200, //成功
            data:token
         }
        }
    }
]