import jwt from "jsonwebtoken"

export const generateTokenandSetCookie = (userId, res) => {

    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' })

    res
        .cookie('access_token', token, {
            maxAge : 1 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite:"strict",
            secure: process.env.NODE_ENV === "production"
        })

}