class AuthApi {
    constructor(){
        this.baseUrl = "https://simple-blog-api-red.vercel.app";
    }


    async login(credentials){
        try{
            if(!credentials.email || !credentials.password){
                throw new Error('Email and password are required');
            }
            const response = await fetch(`${this.baseUrl}/api/auth/login`,
            {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            return response.json()
        }catch(error){
            console.log(error)
        }
    }

    async register (user){
        try{
            const response = await fetch(`${this.baseUrl}/api/auth/register`,
                {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }) 
                return response.json()

        }catch(error){
            console.log(error)
        }
    }
}


 export const authApi = new AuthApi();

