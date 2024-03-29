import { Controller } from "react-hook-form";

import useFormHook from "../hooks/useFormHook.tsx";
import SelectCountries from "./SelectCountries.tsx";

function Form() {
  const {
    register,
    handleSubmit,
    handleWithSubmit,
    errors,
    control,
    isSubmitting,
  } = useFormHook();

  return (
    <div className="max-w-2xl mx-auto mt-5">
      <form onSubmit={handleSubmit(handleWithSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name")}
            className="border rounded-[4px] w-full py-2 px-3 mb-3 border-[#e5e7eb]"
            id="name"
            type="text"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email")}
            className="border rounded-[4px] w-full py-2 px-3 mb-3 border-[#e5e7eb]"
            id="email"
            type="text"
            placeholder="john@doe.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="country"
          >
            Country <span className="text-red-500">*</span>
          </label>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <SelectCountries
                id="country"
                onChange={(val) => {
                  field.onChange(val?.value);
                }}
              />
            )}
          />
          {errors.country && (
            <p className="text-red-500 text-xs italic">
              {errors.country.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
