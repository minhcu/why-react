import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const AddNewPost = () => {
  return (
    <Button className="bg-gray-900 hover:bg-gray-800 text-white cursor-pointer">
      <PlusIcon /> Add New Post
    </Button>
  );
};

export default AddNewPost;
