import { useContext } from "react";
import { MenuContext } from "../context/MenuProvider.tsx";

interface Projects {
  title: string;
  url: string;
  description: string;
}

export default function DockOpen(
    {title, projects, tools, close}: {title: string, projects: Projects[], tools: string[], close: ()=>void }
){
  const { updateMenuTitle } = useContext(MenuContext)
    return (
        <section
            className={"relative w-[32rem] rounded-2xl bg-[rgb(41,36,35)] h-fit -top-60 -right-60 -translate-x-1/2 -translate-y-1/2 space-y-6 text-white overflow-auto min-w-96 min-h-[28rem]"}>
            <div className="h-10 bg-[#2c2c2c] rounded-t-xl flex items-center px-4">
                <div className="flex gap-2">
                    <button
                        onClick={()=>{close(); updateMenuTitle("Finder")}}
                        className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600"
                    />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
                    <div className="w-3 h-3 bg-green-500 rounded-full"/>
                </div>
                <span className="text-white/70 text-sm ml-4">
                     {title}
                 </span>
            </div>
            <section className={"px-6"}>
                <h3 className="text-lg font-semibold mb-2">Projects</h3>
                <div className="space-y-6">
                    {projects?.map((item: Projects, index: number)=>{
                        return (
                            <div key={index}>
                                <h4 className="font-medium">{item.title}</h4>
                                <a className="text-sm text-gray-500" href={item.url}>{item.url}</a>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className={"px-6 pb-6"}>
                <h3 className="text-lg font-semibold mb-2">Tools and Technologies</h3>
                <div className="flex flex-wrap gap-2">
                    {tools?.map((skill) => (
                        <span key={skill} className="bg-white/10 px-2 py-1 rounded text-sm">{skill}</span>
                    ))}
                </div>
            </section>
        </section>
    )
}