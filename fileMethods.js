import fs from "fs";

export const get = (expenses)=>{
    return new Promise ((resolve, reject)=>{
        fs.readFile(expenses+".json","utf8",(err,content)=>{
            if(err){
                reject(err);
            }
            if (content ===""){
                resolve([])
            }else{
            resolve(JSON.parse(content));
            }
        });
    });
};

export const save = (expenses,content) =>{
    return new Promise ((resolve, reject) =>{
        fs.writeFile(expenses+".json",JSON.stringify(content),(err)=>{
            if (err){
                reject(err);
            }
            resolve();
        });
    });

};
