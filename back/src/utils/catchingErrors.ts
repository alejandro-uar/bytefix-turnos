import { error } from "console"
import { Request,Response,NextFunction } from "express"


 
export const catchingsErrors = <Params, ResBody, ReqBody> (controller: (req: Request<Params, ResBody, ReqBody>, res: Response<ResBody>, next: NextFunction) => Promise<void>) => {
    return (req: Request<Params, ResBody, ReqBody>, res: Response<ResBody>, next: NextFunction)=>{
        controller(req, res, next)
            .catch(error => next(error))
    }
}