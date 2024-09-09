import { PasswordInput, TextInput } from "@/components/UI/input";
import {
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div>
      <button className="bg-accent text-white hover:bg-accent-dark">
        Compra ahora
      </button>
      <button className="">
        <FontAwesomeIcon
          icon={faBagShopping}
          className="text-primary w-[24px]"
        />
        Add to Cart
      </button>
      <TextInput value="asdasd"/>
      <h1 className="text-sale bg-header">asdads</h1>

      <form>
      <div className="mb-4">
        <label htmlFor="username" className="block text-base mb-1">Username:</label>
        <TextInput
          id="username"
          placeholder="Enter your username"
          variant="success" 
          size="md" 
          className="shadow-medium" 
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="password" className="block text-base mb-1">Password:</label>
        <PasswordInput
          id="password"
          placeholder="Enter your password"
          variant="error" 
          size="sm" 
          className="shadow-small"
        />
      </div>
      
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Submit</button>
    </form>
    </div>
  );
}
