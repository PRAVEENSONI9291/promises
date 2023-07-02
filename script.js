const posts= [
    {title:"post1", body: 'this is post1'},
    {title:"post2", body: 'this is post2'}
]

let user=  {user1:'prince', lastactivitytime: new Date().toLocaleTimeString()}

console.log("initially posts are: ");
posts.forEach((post)=>{
    console.log(post.body);

});

console.log("last activity time:",user.lastactivitytime );

async function updatetime(){

    function getPost(){
        
    
            posts.forEach((post)=>{
                console.log(post.body);
    
            });
    
        console.log("last activity time ",user.lastactivitytime);
    
        
    }
    
    function createPost(post){
    
        return new Promise((resolve, reject) => {
    
            setTimeout(() => {
    
                posts.push(post);
                updateLastUserActivityTime(new Date().toLocaleTimeString())
                
                resolve();
    
            }, 5000);
    
        })
    }


    
    function updateLastUserActivityTime(time){
            user.lastactivitytime= time;   
    }

    function deletePost(){
    
        return new Promise((resolve, reject) => {
    
            setTimeout(() => {

                if(posts.length>0)
                {
                    posts.pop();
                    updateLastUserActivityTime(new Date().toLocaleTimeString())

                    resolve();
                }
                else{
                    reject("No posts are there")
                }
            }, 10000);
    
        })
    }

    console.log("after adding one more post, last activity time got changes and one more post will be added");
  
    await createPost({title:"post3", body: 'this is post3'})
    getPost()

    console.log("after deleting the last post, last activity time got changed and last post will be deleted");


    await deletePost();
    getPost();


}

updatetime()