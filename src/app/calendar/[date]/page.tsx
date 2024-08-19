import AddTaskForm from "@/components/AddTaskForm"

const page = ({ params }: { params: { [key: string]: string } }) => {
    return (
        <div>
            <AddTaskForm params={params}/>
        </div>
    )
}
export default page