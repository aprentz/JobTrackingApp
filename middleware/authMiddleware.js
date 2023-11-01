import { UnauthenticatedError, UnauthorizedError, BadRequestError } from "../errors/errors.js"
import { verifyJWT } from "../utils/tokenUtils.js"

export const authenticateUser = (req, res, next) => {
   const { token } = req.cookies
   if (!token) throw new UnauthenticatedError('authentication invalid')

   try {
      const { userId, role } = verifyJWT(token)
      const testUser = userId === '6534989b265f20870adc8497'
      req.user = { userId, role, testUser }
      next()
   } catch (error) {
      throw new UnauthenticatedError('authentication invalid')
   }
}

export const checkForTestUser = (req, res, next) => {
   if (req.user.testUser) throw new BadRequestError('Demo Mode Enabled. This app is currently read-only')
   next()
}

export const authorizePermissions = (...roles) => {
   return (req, res, next) => {
      if (!roles.includes(req.user.role))
         throw new UnauthorizedError('Unauthorized to access this route')
      next()
   }
}