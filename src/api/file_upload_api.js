export class FileUpload {
    constructor() {
        this.baseUrl = "https://simple-blog-api-red.vercel.app" ;
    };

    async upload(file){
        const formData =  new FormData();
        formData.append('file', file);

        const token = localStorage.getItem('token') ;
        try{
            const response = await fetch(`${this.baseUrl}/api/file-upload/upload`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}` ,
                },
                body: formData
            })
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        } catch(error){
            console.log(error);
            throw error
            
        } 

     
    }

}