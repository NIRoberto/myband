import jwt from 'jsonwebtoken';

module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if (!token) {
     return   res.status(401).json({
            message: "unauthorized"
        })
    }

    try {
        const verified = jwt.verify(token, process.env.tokens)
        req.loggeduser = verified;
        
     
        next();
    }
    catch (error) {
     return   res.status(400).json({
            message: "invalid token"
        });
    }


}