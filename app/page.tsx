"use client"
import CarsFiltersOption from "@/components/CarsFiltersOption";
import CarsList from "@/components/CarsList";
import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([])
  const [carsOrgList, setCarsOrgList] = useState<any>([])

  useEffect(() => {
    carList()
  }, [])

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter((item: any) => item.carBrand == brand);
    setCarsList(filterList);
  }

  const orderCarList = (order: any) => {
    const sortedData = [...carsOrgList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price);
    setCarsList(sortedData);
  }

  const carList = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists);
  }

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOption carsList={carsOrgList} orderCarList={(value: string) => orderCarList(value)} setBrand={(value: string) => filterCarList(value)} />
      <CarsList carsList={carsList} />
    </div>
  )
}
