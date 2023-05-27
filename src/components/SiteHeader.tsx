import React,{useEffect} from "react";
import Container from "./Container";
import Logo from "./Logo";
import AuthNavigation from "@/ui/AuthNavigation";
import { useAppDispatch } from "@/core/redux/store";
import { GetCartItemsFromLocalStorage } from "@/core/redux/reducers/productSlice";

type Props={
  classNames?:string
}

const SiteHeader = ({classNames}:Props) => {
  let dispatch=useAppDispatch();
  useEffect(() => {
    dispatch(GetCartItemsFromLocalStorage());
  }, []);
  
  return (
    <div className="flex w-full">
      <Container>
       {/* for dot click project  */}
       <div className={`flex flex-row items-center py-2 justify-between  ${classNames}`}>

        {/* <div className="flex flex-row flex-wrap items-center py-2 border-b"> */}
          <div className="flex flex-col md:w-2/12">
            <Logo />
          </div>
          {/* <div className="flex flex-col md:w-7/12">
            <div className="flex flex-row justify-start space-x-5">
              <div className="">
                <Dropdown items={[""]} />
              </div>
              <SearchInput/>
            </div>
          </div> */}
          <div className="flex flex-col md:w-3/12">
            <AuthNavigation/>
          </div>
        {/* </div> */}
        {/* <div className="flex flex-row">
            <SiteNavigations/>
        </div> */}
       </div>

      </Container>
    </div>
  );
};

export default SiteHeader;
