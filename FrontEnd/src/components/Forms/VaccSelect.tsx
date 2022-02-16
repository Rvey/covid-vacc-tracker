import { Field } from "formik";

interface VaccSelectProps {
    
}
 
const VaccSelect: React.FC<VaccSelectProps> = () => {
    return ( 
        <div className="mt-4 flex gap-4">
        <div className="flex items-center gap-3 bg-red-300 p-1 rounded-md">
          <Field
            type="radio"
            name="VaccNumber"
            className="w-3 h-3 cursor-pointer"
            value="1"
          />
          <label>First vaccine</label>
        </div>
        <div className="flex items-center gap-3">
          <Field
            type="radio"
            name="VaccNumber"
            className="w-3 h-3 cursor-pointer"
            value="2"
          />
          <label>Second vaccine</label>
        </div>
        <div className="flex items-center gap-3">
          <Field
            type="radio"
            name="VaccNumber"
            className="w-3 h-3 cursor-pointer"
            value="3"
          />
          <label>third vaccine</label>
        </div>
      </div>
     );
}
 
export default VaccSelect;