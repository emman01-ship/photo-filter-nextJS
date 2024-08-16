"use client"
import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import ContrastIcon from '@mui/icons-material/Contrast';
import ScaleIcon from '@mui/icons-material/Scale';
import { Slider } from "@mui/material";


const Upload = () => {

    const [file, setFile] = useState<File | undefined>();
    const [preview, setPreview] = useState<String | ArrayBuffer | null>(null);

    const [blurValue, setBlur] = useState<number | number[]>(1);
    const [brightness, setBrightness] = useState<number | number[]>(100); /* 100% brightness represents original image */
    const [constrast, setContrast] = useState<number | number[]>(100); /* 100% represents original image*/
    const [grayscale, setGrayscale] = useState<number | number[]>(0);

    /* functions to update the filter values as they are changed using the slider */
    const handleBlur = (event: Event, newValue: number | number[]) => {
            setBlur(newValue as number[]);
    }

    const handleBright = (event: Event, newValue: number | number[]) => {
        setBrightness(newValue as number[]);
    }

    const handleContrast = (event: Event, newValue: number | number[]) => {
        setContrast(newValue as number[]);
    }

    const handleGray = (event: Event, newValue: number | number[]) => {
        setContrast(newValue as number[]);
    }

    /* array of objects each containing the sidebar options*/
    const SidebarData = [
        {
            filterOption: "blur",
            icon: <BlurCircularIcon/>,
            slider: <Slider defaultValue={blurValue} 
            aria-label="Default" valueLabelDisplay="auto"
            step={1}
            min={1}
            max={5}
            onChange={handleBlur}
            />
    
        },
        {
            filterOption: "brightness",
            icon: <Brightness2Icon/>,
            slider: <Slider defaultValue={brightness} 
            aria-label="Default" valueLabelDisplay="auto"
            step={1}
            min={1}
            max={100}
            onChange={handleBright}
            />
    
        },
        {
            filterOption: "contrast",
            icon: <ContrastIcon/>,
            slider: <Slider defaultValue={constrast} 
            aria-label="Default" valueLabelDisplay="auto"
            step={1}
            min={1}
            max={100}
            onChange={handleContrast}
            />
    
        },
        {
            filterOption: "grayscale",
            icon: <ScaleIcon/>,
            slider: <Slider defaultValue={grayscale} 
            aria-label="Default" valueLabelDisplay="auto"
            step={1}
            min={0}
            max={100}
            onChange={handleContrast}
            />
    
        }
    ]
    
    async function handleOnSubmit(e:React.SyntheticEvent) {
        e.preventDefault();
    
        if (typeof file === 'undefined') return;
    
        const formData = new FormData();
    }
    function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement & {
            files: FileList
        }
    
        setFile(target.files[0]);
    
        const file = new FileReader;
    
        file.onload = function () {
            console.log("file", file.result);
            setPreview(file.result);
        }
    
        file.readAsDataURL(target.files[0]);
    
    }

  return (
    <div>
        <div className="fixed top-0 left-0 z-40 w-60 h-screen">
        <Sidebar
        sideData={SidebarData}
        />
      </div>
      <form className='ml-60 top-0'>
        <input
            type="file"
            name="image"
            accept="image/png/jpeg"
            onChange={handleOnChange}
            placeholder="Upload Picture"
        />
        <img src={preview} 
        style={{filter: `blur(${blurValue}px) brightness(${brightness}%) 
        grayscale(${grayscale}%) contrast(${constrast}%)`}}/>
      </form>
    </div>

  )
}

export default Upload
