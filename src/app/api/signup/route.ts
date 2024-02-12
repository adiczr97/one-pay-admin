import connect from "@/utils/db"
import { NextResponse } from "next/server"
import Admin from '@/models/AdminModel'
import { securePassword } from "@/utils/securePassword"

export const POST = async (req: Request) => {
    const { user_name, email, phone_number, password } = await req.json()
    await connect()

    const existingEmail = await Admin.exists({ email })
    if (existingEmail) {
        return new NextResponse("Email is Already in Use", { status: 400 })
    }

    const existingNumber = await Admin.exists({ phone_number })
    if (existingNumber) {
        return new NextResponse("Phone Number is Already in Use", { status: 400 })
    }

    const existingName = await Admin.exists({ user_name })
    if (existingName) {
        return new NextResponse("User Name is Already in Use", { status: 400 })
    }

    const spassword = await securePassword(password);
    const admin = await Admin.create({
        user_name,
        email,
        phone_number,
        password: spassword
    })
    try {
        let adminData = await admin.save()

        if (!adminData) {
            return new NextResponse("Your registration has been failed", { status: 404 })
        }

    } catch (error: any) {
        return new NextResponse(error, {
            status: 500,
        })
    }

    return new NextResponse("Your registration has been successful", { status: 200 })
}