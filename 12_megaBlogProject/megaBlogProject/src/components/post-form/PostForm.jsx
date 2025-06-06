import React from 'react'
import {useForm} from 'react-hook-from'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux';
import appwriteService from '../../appwrite/config'
import { Button, Input, RTE, Select } from "..";
export default function PostForm({ post }) {

    const {
        register,
        handleSubmit,
        watch,
        setvalue,
        control,
        getValue
    } = useForm({
        defaultValue:{
            title:post?.title || "",
            slug:post?.$id || "",
            content:post?.content || "",
            status:post?.status || "activate"
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state)=>state.auth.userData);

    async function submit(data) {
        if(post){


           const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null
            
           if(file)
                appwriteService.deleteFile(post.featuredImg);

           const dbPost = await appwriteService.updatePost(post.$id,{
            ...data,
            featuredImg: file? file.$id : undefined
           });

           if(dbPost){
            navigate(`*/post/${dbPost.$id}`);
           }
        }
        else{
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImg = fileId;

                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id
                });

                if(dbPost){
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = React.useCallback(
      (value) => {
        if(value && typeof value === "string")
                return value
                        .trim()
                        .toLowerCase()
                        .replace(/[^a-zA-Z\d\s]+/g, "-")
                        .replace(/\s/g, "-");
            return "";
      },
      []
    );
    

    React.useEffect(() => {
      const subscription = watch((value, {name})=>{
            if(name==="title"){
                setvalue("slug", slugTransform(value.title),{
                    shouldValidate:true
                });
            }
        })
    
        return () => {
            subscription.unsubscribe();
        }
    }, [watch, slugTransform, setvalue])
    

  return (
    <form 
    onSubmit={handleSubmit(submit)} 
    className='flex flex-wrap'>
        <div className='w-2/3 px-2'>
            <Input
                label="Tile: "
                placeholder="Tile"
                className="mb-4"
                {...register("title", {required:true})}
            />

            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug",{
                    required: true
                })}
                onInput={(e)=>{
                    setvalue("slug", slugTransform(e.currentTarget.value), {shouldValidate:true})
                }}
            />
            <RTE 
                label={"Content :"}
                name={"content"}
                control={control}
                defaultValue={getValue("content")}
            />
        </div>
        <div className="w-1/3 px-2">
            <Input
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
            />
            {post && (
                <div className='w-full mb-4'>
                    <img src={appwriteService.getFilePreview(post.featuredImg)}
                        alt={post.title}
                        className='rounded-lg' 
                    />
                </div>
            )}

            <Select
                option={["active", "deactive"]}
                label="Status"
                className={`mb-4`}
                {...register("staus", {
                    required:true,
                })}
            />

            <Button
                type="Submit"
                bgColor={post ? "bg-green-500" : undefined}
                className='w-full'
            >
                {post ? "update" : "Submit"}
            </Button>
        </div>
    </form>
  );
}