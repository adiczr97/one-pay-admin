import bcrypt from 'bcrypt'

export const securePassword = async (password: string) => {
    try {
        const spassword = await bcrypt.hash(password, 10);
        return spassword;
    }
    catch (error: any) {
        console.log(error.message);
    }
}