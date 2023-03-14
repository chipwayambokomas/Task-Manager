const asyncWrapper = (fn) => {
    return async (req,res,next) => {
        try {
            await fn(req,res,next)
        } catch (error) {
            next(error)
            //next passes the parameter to the next middleware
        }
    }
}

module.exports = asyncWrapper