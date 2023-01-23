import Link from "next/link"
import styles from "../styles/BlogCard.module.css"

export default function BlogCard({title, tags, coverPhoto, createdAt, updatedAt, slug, id, content}) {
    return (
        <div className="mb-14">
            
                <div className={styles.imgContainer}>
                    <Link href={"/posts/"+slug}>
                        <h2 className="text-2xl font-bold mb-2 hover:underline">{title}</h2>
                    </Link>
                    
                    <p className="text-base text-gray-500 mb-2">Last updated: {updatedAt.slice(0,10)}</p>
                    
                    <p className="text-gray-500 mb-5">{content.text.slice(0, 200).replace("//n", " ") + "..."}</p>
                    <div className="flex gap-x-4">
                        {tags.map(tag => <p className=" bg-gray-100 p-1 rounded-md">{tag}</p>)}
                    </div>
                </div>
        </div>
    )
}