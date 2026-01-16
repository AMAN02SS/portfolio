import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions =  {
    providers:[
        CredentialsProvider({
            name:"Admin",
            credentials: {
                email:{},
                password:{},
            },
            async authorize(credentials){
                if(
                    credentials.email === process.env.ADMIN_EMAIL &&
                    credentials.password === process.env.ADMIN_PASSWORD
                ) {
                    return {
                        id:"1",
                        name:"Admin"
                    };
                }
                return null;
            }
        })
    ],
    session: {strategy: "jwt"},

};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};