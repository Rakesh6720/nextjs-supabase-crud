import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import BikeForm from "../../components/bike-form";
import { supabase } from "../../supabase-client";

const NewBike = () => {
  const [bikeMake, setBikeMake] = useState("");
  const [bikeModel, setBikeModel] = useState("");
  const [bikeYear, setBikeYear] = useState("");
  const router = useRouter();

  return (
    <>
      <h1>Create new bike</h1>
      <BikeForm
        bikeMake={bikeMake}
        onMakeChange={(e) => setBikeMake(e.target.value)}
        bikeModel={bikeModel}
        onModelChange={(e) => setBikeModel(e.target.value)}
        bikeYear={bikeYear}
        onYearChange={(e) => setBikeYear(e.target.value)}
        onSubmit={async (e) => {
          e.preventDefault();
          await supabase.from("bikes").insert({
            make: bikeMake,
            model: bikeModel,
            production_year: bikeYear,
          });

          router.push("/");
        }}
      />
    </>
  );
};

export default NewBike;
