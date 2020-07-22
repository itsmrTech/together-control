import * as React from 'react';

function SvgFrame(props) {
  return (
    <svg width={727} height={727} {...props}>
      <rect width="100%" height="100%" fill="none" />
      <g className="frame_svg__currentLayer">
        <path
          fill="#dadada"
          d="M55.21 0h3.66c2.03 6.8 3.45 16.3 9.21 20.75 11.21-4.62 23.48-5.74 34.84-.95 6.83-4.13 10.31-12.87 14.26-19.8h2.72c2.37 8.07-4.44 19.31 1.11 25.89 12.21-4.18 26.01-9.17 38.35-2.21 9.43-.64 1.45-20.37 10.51-20.67 2.45 10.03 1.54 29.76 16.49 27.83 7.49-5.72 3.9-18.49 8.69-24.78 3.73 5.64 3.4 17.62 8.94 22.55 15.43-6.52 31.3-.58 46.69 2.3 7.97-6.78 7.36-21.29 13.45-28.88 6.9 6.74 7.42 20.45 14.59 28.64 15.86-1.92 32.79-9.76 48.48-1.96 6.47-4.5.16-21.41 8.5-23.56 2.35 9.91 1.28 29.08 16.46 25.53 5.55-5.4 3.5-17.51 6.89-23.41 6.43 4.08 1 24.96 13.97 23.63 13.4 1.4 5.22-22.61 13.53-25.05 1.73 7.27 1.98 15.85 5.59 23.05 15.95-5.54 32.54-1.72 48.35 2.01 5.76-7.01 8.48-16.02 10.6-24.69.43-2.2 2.75-6.39 4.72-3.02 4.05 9.21 6.45 19.53 12.63 27.71 15.96-2.79 32.95-9.09 48.7-1.96 5.12-4.77.78-19.09 6.89-22.87 3.69 6.4 3.12 19.09 8.95 24.7 15.49.95 11.54-17.15 15.24-26.9 6.97 1.59 2.16 17.07 9.71 20 13.07-6.81 27.42-2.96 40.28 2.19 2.52-8.68-.64-17.53-.56-26.07h1.83c6.4 5.22 8.89 14.03 15.77 18.79 10.44-2.79 21.41-3.84 31.71.28 12.07 5.02 6.63-18.82 16.38-16.77 3.43 6.03 4.93 13.02 8.91 18.78 11.25-3.21 24.04-7.73 35.17-1.48 5.48 10.95 2.9 23.53-1.39 34.37 3.43 6.84 19.16 4.4 18.86 13.71-6.01 2.23-13.01 3.16-17.83 7.75 2.8 11.71 5.81 23.87 1.18 35.57 3.35 7.81 13.72 9.82 18.76 16.5v1.83c-8.55.86-17.71-3.73-26.1-.39 4.66 12.58 9.58 26.51 2.41 39.37.96 8.97 19.14 2.19 19.7 10.53-10.01 2.97-27.61.13-26.76 15.19 6.11 5.71 16.79 5.54 24.89 8.05-2.67 7.62-18.23 1.91-22.97 7.89 6.48 15.92 1.43 32.66-2.17 48.53 8.48 7.31 20.87 8.01 29.37 14.47-8.54 6.22-21.35 5.53-29.24 13.62 3.51 15.85 7.62 32.33 1.99 48.3 7.19 3.79 15.75 2.87 23.08 5.56-2.68 8.51-25.9.48-25.1 13.53-1.04 12.37 17.84 8.32 23.61 13.07-4.32 5.65-19.37 1.36-23.36 8.58-4.02 15.85 17.78 11.59 25.55 16.53-5.17 5.55-16.47 2.99-23.79 6.88 7.42 16.12 1.08 33.16-1.85 49.35 8.49 6.39 19.34 8.2 28.67 12.93-3.11 10.77-29.41 4.71-28.6 19.22 4.7 13.88 7.41 29.16 1.9 43.19 6.63 4.6 17.48 3.95 22.73 8.19-6.81 3.87-18.93 1.52-24.78 8.71-2.11 15.5 18.19 13.18 27.89 16.59-.65 8.28-25.61.76-19.7 13.46 6.99 12.08.14 23.97-3.25 35.29 6.51 5.58 17.8-1.22 25.88 1.11v2.72c-6.92 3.98-15.67 7.44-19.8 14.26 4.61 11.43 4.1 23.73-.96 34.86 4.61 5.43 13.52 7.6 20.76 9.22v3.74c-6.76 3.38-15.21 3.83-20.89 9.27 2.94 9.07 6.92 19.24 3.58 28.67-9.64 3.09-19.52-.44-28.57-3.77-5.81 5.76-5.17 14.58-9.44 20.95h-3.65c-1.9-6.84-3.36-16.3-9.11-20.75-11.21 4.62-23.48 5.73-34.84.95-6.84 4.12-10.31 12.87-14.26 19.8h-2.72c-2.38-8.07 4.43-19.32-1.11-25.89-12.21 4.18-26.01 9.17-38.35 2.21-9.43.63-1.45 20.37-10.51 20.67-2.45-10.03-1.54-29.76-16.49-27.83-7.49 5.71-3.9 18.49-8.69 24.78-3.73-5.64-3.4-17.63-8.94-22.55-15.43 6.52-31.3.58-46.69-2.3-7.97 6.78-7.36 21.29-13.45 28.88-6.91-6.75-7.42-20.45-14.59-28.64-15.86 1.92-32.79 9.76-48.48 1.96-6.48 4.5-.16 21.41-8.5 23.56-2.35-9.91-1.29-29.08-16.46-25.53-5.55 5.4-3.51 17.5-6.89 23.41-6.43-4.09-1-24.96-13.97-23.63-13.4-1.4-5.22 22.6-13.53 25.05-1.73-7.27-1.98-15.85-5.59-23.05-15.95 5.54-32.54 1.72-48.35-2.01-5.76 7.01-8.48 16.02-10.6 24.69-.43 2.19-2.76 6.39-4.72 3.02-4.06-9.21-6.45-19.54-12.63-27.71-15.96 2.78-32.95 9.09-48.7 1.96-5.13 4.77-.78 19.09-6.89 22.87-3.7-6.4-3.12-19.09-8.95-24.7-15.5-.95-11.54 17.15-15.24 26.9-6.97-1.6-2.16-17.07-9.71-20-13.08 6.81-27.42 2.96-40.28-2.19-2.53 8.66.65 17.54.56 26.07h-1.83c-6.41-5.23-8.89-14.04-15.77-18.79-10.44 2.79-21.42 3.83-31.71-.28-12.07-5.02-6.63 18.82-16.38 16.77-3.43-6.03-4.93-13.03-8.91-18.78-11.25 3.21-24.04 7.73-35.17 1.48-5.48-10.95-2.9-23.53 1.39-34.37-3.44-6.85-19.16-4.4-18.86-13.71 6.01-2.24 13.01-3.17 17.83-7.75-2.8-11.71-5.82-23.88-1.18-35.57-3.35-7.81-13.73-9.82-18.76-16.5v-1.83c8.55-.86 17.7 3.72 26.1.39-4.66-12.58-9.59-26.52-2.41-39.37-.96-8.97-19.15-2.19-19.7-10.53 10-2.97 27.61-.13 26.76-15.19-6.11-5.71-16.79-5.54-24.89-8.05 2.67-7.63 18.23-1.92 22.97-7.89-6.48-15.92-1.44-32.67 2.17-48.53-8.48-7.31-20.87-8.01-29.37-14.47 8.54-6.23 21.35-5.53 29.24-13.62-3.51-15.85-7.62-32.33-1.99-48.3-7.2-3.79-15.76-2.87-23.08-5.56 2.67-8.52 25.9-.48 25.1-13.53 1.04-12.37-17.85-8.32-23.61-13.07 4.31-5.66 19.37-1.36 23.36-8.58 4.01-15.85-17.78-11.6-25.55-16.53 5.17-5.56 16.47-2.99 23.79-6.88-7.42-16.12-1.08-33.17 1.85-49.35-8.49-6.39-19.35-8.21-28.67-12.93 3.11-10.77 29.41-4.71 28.6-19.22-4.71-13.88-7.41-29.17-1.9-43.19-6.63-4.61-17.49-3.96-22.73-8.19 6.81-3.87 18.93-1.52 24.78-8.71 2.1-15.5-18.19-13.18-27.89-16.59.65-8.29 25.61-.76 19.7-13.46-7-12.09-.14-23.97 3.25-35.29-6.52-5.59-17.8 1.22-25.88-1.11v-2.72c6.92-3.98 15.66-7.45 19.8-14.26-4.61-11.43-4.1-23.73.96-34.86C16.14 62.7 7.28 60.35 0 58.96v-3.72c6.47-4.11 15.16-3.61 20.95-9.36-3.33-9.05-6.86-18.93-3.77-28.57 9.43-3.34 19.6.64 28.67 3.58C51.36 15.22 51.63 6.68 55.21 0m.85 9.12c-4.16 8.76-10.54 17.43.9 23.77 11.18-6.58 4.85-16.47-.9-23.77m605.25.2c-3.84 8.15-11.61 17.52.69 23.39 10.27-5.22 5.85-18.34-.69-23.39m-207.15 1.79c-2.63 7.13-6.07 13.94-9.18 20.84 3.97 5.12 15.14 3.1 19.07-.02-2.92-6.61-7.01-15.03-9.89-20.82m-189.94 1.15c-2.99 4.64-3.11 10.79-6.96 15.02-8.24 9.7 15.04 8.85 17.63 4.83-4.25-5.58-6.17-15.61-10.67-19.85m338.79.17c-4.56 12.4-.7 20.42 12.07 23.55-.88-7.01-1.19-21.61-12.07-23.55m-489.49 1.72c-9.1 4.88-8.04 13.23-9.52 21.77 11.76-.33 16.73-16.07 9.52-21.77m435.95 4.28c-.72 4.79-6.66 12.53-.49 15.75 6.79-3.11 4.96-13.79.49-15.75m-382.2.91c-5.38 5.78-.84 12.5 3.65 16.78 6.14-4.09-.25-14.23-3.65-16.78m-144.61.76c-6.38 7.02-.34 20.37 4.51 27.74 8.35 13.53 29.06 2.73 27.18-11.25-4.28-12.6-19.65-17.12-31.69-16.49m62.71.25c-10.87 1.43-24.19 6.31-26.2 18.54 4.06 16.57 26.16 18.09 38.84 11.08 15.83-7.22 29.86-19.7 47.95-20.96 5.25.63 13.96.14 15.28 6.9-5.86-4.18-7.28-1.92-4.31 4.16-4.43-1.05-6.08-6.9-10.71-7.2.89 3.59 5.67 5.5 4.77 9.8-4.3-.33-5.43-6.86-9.87-7.98 3.01 2.69 3.62 15.02.15 7.12-2.4-9.69-18.58-2.25-13.09 5.74 10.23 11.52 32.4 4.36 38.55-8.62-1.53-15.64-22.44-17.44-33.92-13.41-19.1 4.99-33.65 22.77-54.43 21.6-4.6.16-12.57-.94-12.66-6.95 2.87 1.38 5.6 3.41 8.9 3.54.24-3.1-6.04-5.79-3.61-8.72 3.01 3.69 13.22 9.75 7.41 1.49-3.79-11.74 5.26 7.77 10.29 3.08-2.4-2.02-7.13-7.74-3.19-9.58 1.47 7.36 12.32 10.17 15.68 2.94 5.16-10.08-8.25-13.74-15.83-12.57m248.59-.29c-2.05 6.01-5.01 13.17 1.01 18.22 8.72-3.4 2.49-13.46-1.01-18.22m50.29.28c-.13 6.25-6.88 12.19-1.04 17.81 9.97-2.84 6.53-14.34 1.04-17.81M524.02 20c-3.22 6.1-6.5 13.75.97 18.22 7.11-3.57 1.68-13.5-.97-18.22m99.76.36c-8.93-.28-10.17 13.06-2.03 15.1 6.25 2.77 8.5-3.77 11.65-7.3 2.54 3.43-3.18 7.91-3.05 11.91 5.83 1.34 6.73-7.84 11.58-7.66 1.8 4.45-6.98 5.95-3.81 9.7 4.39-1.63 7.41-5.52 11.68-7.29-.56 3.69-3.99 5.43-6.64 7.48 1.62 3.83 7.15-.56 10.14-1.18-1.59 5.57-9.06 6.39-13.96 5.96-23.45-1.32-39.95-22.73-63.55-23.06-9.58-1-23.34 3.13-23.45 14.71 6.94 12.74 30 20.47 40.68 8.64 1.99-11.24-14.89-13.14-15.24-1.72-6.79-2.02 1.28-9.15 4.12-11.85-5.78.74-9.54 4.65-11.18 10.06-4.35-2.16.71-8.06 2-11.15-5.13.22-5.92 7.49-10.47 8.07 1.53-4.82 2.87-9.75-3.6-6.01 6.95-9.83 21.45-5.67 30.79-2.19 17.19 8.4 33.65 22.09 53.91 20.29 8.83.75 20.03-8.16 15.76-17.69-5.39-13.76-22.39-16.53-35.33-14.82m63.86.12c-11.99.47-30.93 14-19.2 26.08 8.41 4.28 12.15 18.51 23.41 15.35 18.48-6.56 23.41-49.93-4.21-41.43m-492.39.78c-2.33 5.33-7.56 12.04-1.15 16.91 6.84-3.87 6.37-13.27 1.15-16.91m164.85-.39c-3.13 4.79-7.84 13.18-.23 16.21 8.79-2.97 2.55-10.72.23-16.21m-141.81 8.55c-7.88.75-20.67 3.11-20.31 13.47-2.58 12.47 18.5 16.21 20.12 3.08 4.64-5.84 1.72 5.64.05 8.15 5.75-1.29 9.32-7.32 11.54-12.44 4.21-1.19-.59 7.36-1.34 9.74 3.95 4.26 13.17-15.99 11.49-5.49-3.91 7.47 9.79-4.58 7.33 1.27-20.43 15.32-47.49 11.25-71.28 9.88-39.63-.12-79.17 1.16-118.75.06 1.65 46.8-1.66 93.67 1.15 140.43.46 17.24-.31 36.07-11.56 50.16-4.56.04 6.45-11.3-.8-7.89-10.5 1.67 9.73-7.48 5.47-11.5-3.35.92-6.88 4.63-10.4 1.98 5.13-2.82 11.78-5.99 13.13-12.17-3.35.79-6.1 3.43-9.81 2.78.04-5.34 11.65-4.84 9.72-11.8 2.36-12.7-17.81-15.52-21.39-4.33-8.07 19.05 1.85 39.58 6.26 58.3 17.55-13.6 27.4-36.94 25.13-59.01-.04-46.66-.1-93.33.01-139.99 52.42-.53 104.89.51 157.3-.48 15.96-3.44 32.03-11.01 41.71-24.63-14.52-4.16-29.45-9.33-44.77-9.57m189.17.12c-7.59 1.2-21.26 2.29-19.43 13.45-2.5 12.52 17.92 16.25 19.79 3.82 3.99-7.54 3.58 4.76-.55 6.73 5.46 2.35 9.76-7.3 12.24-11.14 4.27.31-1.11 6.96-1.34 9.74 6.39.05 7.63-8.05 12.52-10.43-4.05 7.41.5 7.74 6.36 4.25-16.5 15.28-41.41 13.03-62.28 11.36-30.55.37-65.63 7.94-92.54-10.61-5.1-7.41 12.84 8.01 8.71-.67-4.6-11.36 7.97 8.54 11.46 5.61-1.07-2.9-5.75-9.37-1.79-10.48 2.77 5.34 5.75 11.17 11.63 13.71-.29-3.66-6.48-9.99-1.6-11.7 2.58 6.29 7.02 14.37 15.38 11.09 10.71-3.96 6.99-20.63-3.11-23.28-18.46-4.25-39.19 2.86-55.71 7.9 13.02 20.71 40.5 28.15 63.8 24.07 39.62-4.26 93.95 14.4 120.95-23.89-13.37-4.91-29.49-9.59-44.49-9.53m94.81-.13c-15.09 1.66-31.85 3.96-45.32 9.56 7.88 12.41 22.11 20.86 36.43 23.78 56.82.64 113.69-.01 170.54.3.59 57.1-.75 114.26.64 171.32 2.83 13.81 11.49 29.36 24.21 35.33 4.21-14.55 8.34-30.84 8.81-46.53.22-10.04-8.79-22.81-20.18-17.24-9.55 5.45-4.67 19.72 5.45 20.2 2.6 5.71-7.2.19-9.94-.92.84 6.59 8.58 8.82 13.19 12.34-3.74.62-6.86-1.43-10.31-2.23-4.01 3.66 16.15 13.89 5.46 11.45-9.22-4.01 6.93 13.65-.75 8.77-12.57-16.87-13.24-38.98-12.29-59.15 3.43-46.35 1.3-92.87 1.74-139.31-46.74-.01-93.5-1.24-140.16 1.86-19.88.09-41.71.12-58.33-12.43-4.28-7.82 12.12 8.68 8.78-.77-2.69-10.65 8.47 10.1 11.43 5.5-.79-3.43-2.48-6.62-2.85-10.17 5.03 3.29 5.71 12.59 12.97 13.01-4.54-4.9-3.2-16.67.63-5.6 2.8 8.53 16.65 8.18 19.6-.48 3.11-11.71-9.77-19.38-19.75-18.59m35.05 3.15c-11.81 2.55-14.76 21.75-1.39 23.53-7.75-7.85 5.11-12.42 8.97-5 5.96-8.6 4.61-19.29-7.58-18.53m-358.63.89c-7.56 1.94-8.34 13.35-2.53 17.53.78-4.17 4.33-5.3 8.8-3.18 4.44.39-1.35 7.94 3.62 6 9.3-7.14 1.49-23.01-9.89-20.35m170.32.1c-11.38-1.26-17.1 17.73-5.38 20.7-4.02-7.54 9.88-8.99 9.35-1.23 8.23-4.57 6.02-18.9-3.97-19.47m21.46-.11c-9.48 1.11-12.39 17.21-2.42 19.3-1.93-6.9 10.79-6.42 8.04.91 11.59-1.85 6.35-23.08-5.62-20.21m-247.11 6.01c-8.59 4.82-16.92 11.01-26.22 13.8 7.69 1.45 26.19 2.22 32.81-.86-8.65.4-2.66-12.15-6.59-12.94m470.8-.59c3.88 4.85 2.43 11.47-2.02 14.49 8.21 1.33 21.14 1.21 30.12-.05-9.42-4.69-18.87-9.35-28.1-14.44m-329.68 3.53c-4.88 5.67-11.63 10.33-12.46 18.35-6.56-3.52-14.58 1.22-19.91 3.4 10.84-2.03 26.25 5.3 32.82-6.25 6.27 11.48 22.88 5.06 31.98 5.48-6.32-1.19-12.62-6.1-19.04-2.74-1.59-6.2-8.39-14.65-13.39-18.24m188.91.86c-4.26 5.43-11.9 9.37-11.48 17.32-5.47-1.52-11.17-1.12-16.11 1.84 9.78.71 23.52 3.61 29.05-4.47 5.85 9.34 19.82 4.01 29.5 4.54-5.59-2.48-11.47-4.05-17.24-1.69-1.36-7.17-7.19-14.91-13.72-17.54m-285.9 1.07c-3.88 3.92-8.68 6.39-13.4 9.04 4.83 2.24 13.42.04 19.56.99-.77-3.09-4.11-8.62-6.16-10.03m485.67 8.88c4.39 2.72 13.88-.12 19.78.99-1.32-4.45-8.6-5.47-10.93-10.29-1.77 4.23-6.13 6.77-8.85 9.3M56.28 45.25c-2.29 5.05-7.55 8.31-11.06 11.72 3.73 4.07 11.57 16.72 8.92 2.21-3.14-9.7 9.36-2.46 13-5.74-4.26-1.84-6.73-6.95-10.86-8.19m495.31.31c-11.7 11.29 4.65 9.75 14.56 7.75-5.11-1.52-10.57-7.01-14.56-7.75M23.17 49.32c-4.21 3.51-10.39 3.97-14.22 7.59 7.41 1.38 14.11 12.55 20.37 3.42 9.02-4.32-4.17-7.19-6.15-11.01m172.08 1.9c-10.73 6.71 11 4.06 0 0m163.03-.27c-8.06 8.1 12.98 1.17 0 0m26.06.2c-8.19 9.3 14.19 2.06 0 0m139.92.19c-11.7 6.51 10.5 5.3 0 0m-190.73 1.07c-10.68 6.8 12.82 1.45 0 0m339.41 1.78c.84 6.32-2.63 16.46 1.66 19.78 1.31-4.31 4.86-6.75 8.5-8.97-4.77-2.29-5.84-9.62-10.16-10.81m29.66 4.22c-2.52 2.29-6.96 3.59-8.37 6.54 6.4 9.88 15.72 5.45 24.01.22-5.19-1.75-10.06-7.53-15.64-6.76m-665.17.94C21.92 65.02 15.69 87.27 24.18 101c7.99 6.04 18.95-7.38 9.67-12.86-9.64-5.75 3.76-4.52 5.71.57 4.69-5.02-14.81-14.08-3.08-10.3 7.8 5.87 3.1-4.3-1.41-6.64 2.03-4.58 5.4 3.41 8.72 2.95-.12-3.72-6.49-12.22.44-7.12 14.17 31.57-29.14 54.22-19.2 86.21 1.32 7.12 7.29 12.82 14.62 12.77 11.94-6.83 18.7-26.58 9.07-37.51-7.72-7.92-17.42 9.38-6.92 12.19 8.05 3.8-4.12 2.53-7.12-.11 1.12 4.41 7.92 5.41 7.98 9.81-4.31.97-6.2-3.92-9.81-4.73-.24 4.35 12.51 12.55 3.37 9.53-7.48-3.9 4.09 9.5-3.8 3.94-15.71-32.95 32.95-57.51 18.73-90.61-2.24-5.17-7.92-10.08-13.72-9.74m335.11 7.12c-100.52 6.74-203.03-2.65-304.21 1.74-3.79 99.2 3.17 198.9-.42 298.28 1.95 3.19-5.01 8.17-.13 10.05 2.52 94.6-1.12 188.71-.7 283.38 96.08.56 193.07-4.02 288.05.13 100.59-5.65 202.54 2.85 303.54-1.26 3.79-99.2-3.17-198.9.42-298.28-1.97-3.21 5.02-8.17.13-10.05-2.52-94.6 1.12-188.71.7-283.38-95.9-.87-192.32 4.66-287.38-.61m312.18.85c-8.6 2.97-11.59 13.13-10.68 21.48.36 22.55 19.33 38.29 23.77 59.57.7 6.88 1.21 15.9-5.61 19.99 3.78-6.47-1.16-5.16-5.97-3.6.78-4.41 7.84-5.4 8.05-10.5-3.06 1.32-8.97 6.32-11.11 2.04 5.26-1.69 9.45-5.45 10.07-11.1-2.83 2.57-9.81 10.9-11.89 4.02 11.41-.35 9.53-17.23-1.71-15.23-11.99 10.64-4.02 33.74 8.63 40.67 13.41-.34 16.48-17.67 14.23-28.03-1.19-16.68-14.48-28.58-18.81-44.25-3.75-8.31-7.9-23.72 2.25-28.7-1.08 3.17-3.26 6.26-2.68 9.75 3.64.57 4.41-6.42 8.91-6.24-1.66 4.31-5.78 7.21-7.22 11.71 3.71 3.23 5.18-5.66 9.67-3.87-.15 4.74-8.95 5.87-7.72 11.62 3.2-1.25 16.3-6.78 8.97-.73-11.01 4.16-.4 20.67 8.08 13.22 8.61-14.5.65-43.01-19.23-41.82M53.39 97.2c-2.52 9.56-10.45 18.14-14.24 27.64 5.88-1.36 12.16-.27 14.08 5.04 2.13-8.21.82-24.88.16-32.68m-19.81 7.38c-8.09-.16-17.47 1.86-19.34 11.13 6.18-.99 15.08 4.54 17.98-3.58.64-1.67 6.45-9.63 1.36-7.55m639.37.72c.51 9.54-1.18 21.39.7 29.56 3.02-4.45 9.63-5.9 14.49-2.02-5.6-8.11-9.45-21.52-15.19-27.54m17.76 5.9c2.9 13.08 12.3 18.28 24.03 11.96-4-9.81-14.53-10.28-24.03-11.96M53.37 154.1c-2.04 5.1-5.11 10.07-9.46 13.94 3.66 1.5 6.79 5.07 10.44 5.64-.96-6.13 1.25-14.82-.98-19.58m619.65 7.36c-.21 6.37-.3 12.75-.27 19.13 3.33.1 5.54-4.65 9.3-5.57-4.04-3.52-5.6-12.02-9.03-13.56m-647.64 3.09c-12.75 2.56 1.28 8.81 7.22 9.13 8.24-3.16-3.79-8.51-7.22-9.13m15.17 7.9c-10.16 1.41-8.69 16.5-.19 19.38 4.45 2.06 13.33.3 13.69-5.53-6.72 4.11-10.51-8.74-3.52-9.54.41-3.79-7.08-4.58-9.98-4.31m659.28.83c-3.68.38-10.1 4.91-4.41 7.52 8.69.24 20.46-5.55 4.41-7.52m-10.62 5.11c-5.11.64-18.94 2.83-9.38 7.07 2.01 7.79-4.02 10.03-8.93 5.64.54 10.36 17.33 12.43 20.92 2.68 4.91-3.95 1.26-13.62-2.61-15.39M32.28 190.48c-3.63 1.98-16.57 4.53-7.16 7.5 5.73 5.54 19.71-5.44 7.16-7.5m21.12 1.68c-3.47 1.89-2.72 6.96 1.66 6.56-.01-2.33 2.57-7.75-1.66-6.56m639.07 6.04c-10.74 7.29 12.13 12.35 14.28 4.05-4.6-1.82-9.31-3.63-14.28-4.05m-21.55 1.26c-3.67 14.79 11.08.48 0 0M63.31 232.11c-.75 6.84-6.57 13.21-2.47 19.99-7.73.92-15.05 7.46-18.59 13.63 6.5 3.75 10.73 10.87 18.55 12.13-3.09 6.02.59 14.28 3.41 19.04-2.04-10.62 4.97-25.47-6.33-32.02 11.87-6.23 4.84-23.74 5.43-32.77m601.15 11.45c.43 9.44-4.52 22.95 4.6 28.59-8.09 5.53-5.19 19.25-4.47 29.05 3.14-4.85 2.92-10.68 2.05-15.88 7.22-1.21 13-6.99 17.24-12.41-3.94-5.87-10.25-11.75-17.65-13.05 2.62-5.27.16-14.24-1.77-16.3M30.47 255.27c-5.3 4.91-13.24 5.44-18.58 9.68 7.05 2.5 13.37 7.14 20.05 9.91 3.62-4.39 5.08-19.21-1.47-19.59m663.77 7.65c-1.89 5.41-4.25 15.14.8 19.08 6.57-3.93 15.14-5.4 21.04-10.02-8.08-1.1-14.13-7.69-21.84-9.06m-656.11 4.2c-3.78 17.51-10.97 34.87-7.71 53.18.92 9.19 13.05 16.17 20.79 9.99 7.91-6.24 1.7-18.28-7.46-19.04-2.54-6.48 10.24 2.11 10.77.32-2.61-5.55-8.26-8.25-13.35-10.95 1.01-4.83 9.72 2.73 10.92 1.37-.25-5.39-16.57-15.04-6.05-11.05 8.71 4.12-6.81-13.8.68-8.72 18.82 26.73 10.4 61.18 10.73 91.52 1.01 21.19 4.08 46.45-11.49 63.31 3.49-5.86 3.15-10.41-4.25-6.36 2.38-4.89 10.48-6.13 10.43-12.52-3.39.74-6.14 3.37-9.85 2.88 1.67-5.53 12.49-5.91 12-13.59-3.31.4-5.7 5.35-10.07 3.54.59-5.4 11.79-3.72 10.28-11.3 2.49-11.22-14.08-15.69-20.48-8.62-9.49 17.22-1.51 36.82 2.45 54.48 1.22 1.66.26 7.77 4.11 6.23 11.2-9.46 18.82-22.97 22.24-37.15.88-34.16-.93-68.38 1.12-102.5-1.69-17.21-10.03-36.8-25.81-45.02m648.29 8.09c-35.63 28.75-18.71 78.65-22.36 117.77-3.95 23.29 1.67 48.99 20.22 64.74.97 1.1 5 3.81 5.07.64 3.46-17.06 10.56-33.87 7.23-51.66-.93-9.19-13.05-16.17-20.79-9.99-7.91 6.24-1.71 18.28 7.46 19.04 2.53 6.48-10.24-2.11-10.77-.32 2.61 5.55 8.26 8.24 13.35 10.95-1.01 4.83-9.72-2.73-10.92-1.37.24 5.39 16.57 15.03 6.05 11.05-8.72-4.12 6.8 13.79-.68 8.72-18.82-26.73-10.4-61.18-10.73-91.52-1.01-21.19-4.08-46.45 11.49-63.31-3.49 5.86-3.16 10.4 4.25 6.36-2.39 4.88-10.48 6.14-10.43 12.52 3.39-.73 6.12-3.39 9.85-2.88-1.68 5.52-12.49 5.91-12 13.59 3.31-.4 5.69-5.36 10.07-3.54-.59 5.4-11.8 3.71-10.28 11.3-2.49 11.21 14.07 15.69 20.48 8.62 9.49-17.22 1.51-36.82-2.45-54.48-1.26-1.7-.25-7.76-4.11-6.23m-631.91 54.9c-7.96 8.05 7.98 10.08 0 0m-25.11 1.3c-3.98.66-13.73 2.55-5.64 4.95 8.47 9.21 21.25-4.62 5.64-4.95m666.08 5.13c-2.24 2.1-4.88 3.89-6.56 6.49 4.31 7.27 12.92-.15 17.9-1.07-2.08-2.45-8.48-3.87-11.34-5.42m-652.87.87c-7.52 1.24-11.95 11.62-6.43 17.38 4.29 5.43 13.46 3.79 16.88-1.86-8.05 1.21-6.31-13.48 1.21-9.29-.19-5.29-7.46-7.23-11.66-6.23m628.36-.03c-2.77 16 11.56.73 0 0m10.34 6.99c-3.29.56-8.82 2.31-8 6.54 7.51-2.83 7.7 9.8.97 8.06 1.17 7.98 14.13 8.17 17.36 1.51 5.51-6.75-1.68-18.31-10.33-16.11M30.4 355.53c-3.27 1.3-6.57 2.63-9.53 4.57 4.87 1.14 10.63 7.63 14.58 2.14 4.34-2.89-2.04-7.36-5.05-6.71m23.01.39c-8.42 6.53 8.19 10.15 0 0m-12.63 6.41c-10.82 2.58-8.73 20.45 2.53 20.29 5.13 1.97 17.1-7.42 5.43-7.34-2.57-3.6-.31-8.1 3.98-7.25-.48-5.56-7.46-7.12-11.94-5.7m653.89-.07c-11.2 4.87 1.99 13.14 7.42 6.87 9.1-2.82-4.4-4.91-7.42-6.87m-22.56 2.05c-3.32 15.18 9.89-.86 0 0m7.79 5.05c-2.46.84-4.41 2.68-5.96 4.71 8.05-1.23 6.3 13.48-1.2 9.28 1.83 9.4 17.97 8 19.76-1.05 3.65-7.43-4.92-16.11-12.6-12.94M32.3 380.45c-3.9 1.52-7.76 3.21-11.96 3.8-.08 4.21 7.69 2.7 10.06 6.28 4.3-1.15 12.39-9.54 1.9-10.08m21.07 1.52c-4.77 1.83-1.32 8.8 2.66 7.65-.17-2.83 1.68-8.12-2.66-7.65m640.42 5.34c-13.03 6.98 9.87 11.92 12.99 4.96-4.16-2.02-8.49-3.87-12.99-4.96m-22.75 2.08c-3.93 15.32 9.84.31 0 0M62.41 425.8c-3.15 4.85-2.93 10.67-2.05 15.88-7.22 1.2-13 6.98-17.24 12.41 3.94 5.88 10.25 11.74 17.65 13.05-2.32 5.76-.76 11.65 1.71 17.21-.53-9.67 4.8-23.65-4.54-29.5 8.09-5.53 5.18-19.26 4.47-29.05m600.38 4.3c2.02 10.61-4.97 25.47 6.33 32.02-11.87 6.23-4.85 23.72-5.43 32.77.75-6.85 6.57-13.21 2.47-19.99 7.73-.92 15.04-7.46 18.59-13.63-6.49-3.75-10.73-10.88-18.55-12.13 3.08-6.03-.59-14.28-3.41-19.04M30.48 445.43c-5.86 4.34-14.27 4.89-19.56 9.59 5.67 1.56 11.16 3.71 16.01 7.13 9.4 8.73 11.51-17.4 3.55-16.72m663.78 6.86c-2.12 6.05-4.08 16.85 1.5 19.62 5.77-4.44 13.64-5.8 19.33-9.87-7.2-2.66-13.8-7.63-20.83-9.75M38.23 457.3c-4.21 14.54-8.34 30.84-8.81 46.53-.22 10.04 8.79 22.81 20.18 17.24 9.54-5.45 4.67-19.73-5.45-20.2-2.6-5.71 7.2-.19 9.94.92-.85-6.6-8.59-8.83-13.19-12.34 3.72-.64 6.87 1.43 10.31 2.23 4-3.66-16.15-13.89-5.46-11.45 9.22 4-6.94-13.65.75-8.77 12.57 16.87 13.23 38.98 12.29 59.15-3.43 46.35-1.3 92.87-1.74 139.31 46.74.01 93.5 1.24 140.16-1.86 19.88-.09 41.71-.12 58.33 12.43 4.28 7.81-12.12-8.68-8.78.77 2.69 10.65-8.48-10.11-11.43-5.5.79 3.44 2.46 6.6 2.85 10.17-5.04-3.29-5.72-12.59-12.97-13.01.58 3.08 6.93 10.69 1.2 10.64-.28-9.94-14.27-16.21-19.95-6.5-7.02 11.53 7.72 21.85 18.27 20.53 15.08-1.67 31.85-3.96 45.32-9.56-7.88-12.41-22.12-20.87-36.43-23.78-56.82-.65-113.7.01-170.54-.3-.59-57.1.75-114.26-.64-171.32-2.84-13.81-11.49-29.36-24.21-35.33m649.51 6.75c-17.21 13.83-27.11 36.83-24.78 58.86.04 46.66.1 93.32-.01 139.99-52.42.52-104.89-.51-157.3.48-15.96 3.44-32.03 11.01-41.71 24.63 18.47 4.61 38.52 14.1 57.65 6.7 7.2-2.41 9.69-11.67 5.83-17.86-4.88-6.72-17.27-5.05-18.52 4.18-4.65 5.83-1.72-5.65-.05-8.15-5.75 1.29-9.32 7.31-11.54 12.44-4.23 1.18.59-7.36 1.34-9.74-3.95-4.26-13.17 15.99-11.49 5.49 3.91-7.47-9.79 4.57-7.33-1.27 20.43-15.32 47.48-11.25 71.28-9.88 39.62.12 79.17-1.16 118.75-.06-1.65-46.8 1.65-93.67-1.15-140.43-.47-17.24.31-36.07 11.56-50.16 4.55-.04-6.45 11.29.8 7.89 10.5-1.67-9.73 7.48-5.47 11.5 3.36-.92 6.87-4.64 10.4-1.98-5.13 2.82-11.78 5.99-13.13 12.17 3.35-.79 6.09-3.45 9.81-2.78-.05 5.34-11.66 4.84-9.72 11.8-2.36 12.7 17.81 15.52 21.39 4.33 7.84-18.94-1.36-39.87-6.61-58.15M30.23 520.24c-22.38.86 3.32 14.11 7.99 4.75-2.28-1.86-4.74-5.55-7.99-4.75m24.33-.05c-9.58 6.47 8.59 10.94 0 0m-12.84 7.15c-9.48 3.55-10.79 13.86-5.5 21.45 4.55-1.54 14.35.28 14.5-5.47-8.35-1.54-1.3-15.58 4.44-7.49 2.4-4.71-7.48-11.33-13.44-8.49m654.24 0c-16.01 6.98 4.63 12.29 10.16 3.75-3.21-1.57-6.53-3.6-10.16-3.75m-24.02.94c-5.06 11.86 10.35 2.51 0 0m8.57 6.17c-3.12.73-7.84 2.33-7.56 6.25 7.4-3.88 10.05 9.03 3.01 10.15 4.11 5.43 13.79 5.45 17.04-1.07 3.14-7.59-4.21-17.11-12.49-15.33M28.48 546.44c-3.86.99-15.42 2.84-6.53 5.67 5.97 7.09 18.3-7.12 6.53-5.67m24.03-.33c-11.09 5.46-3.7 11.06.78 20.03.3-5.15 3.36-16.91-.78-20.03m-15.24 6.37c-12.55 1.55-14.64 18-12.77 27.89 1.19 16.68 14.48 28.58 18.81 44.25 3.75 8.31 7.9 23.72-2.25 28.7 1.08-3.17 3.25-6.26 2.68-9.75-3.64-.57-4.41 6.41-8.91 6.24 1.66-4.31 5.78-7.22 7.22-11.71-3.72-3.24-5.18 5.65-9.67 3.87.15-4.75 8.94-5.88 7.72-11.62-4.22.37-7.25 4.61-11.88 3.98 1.72-4.5 10.17-5.17 7.35-11.81-.66-7.19-12.74-8.98-14.55-1.35-3.35 14.08.31 34.26 16.47 38.73 11.39 1.43 16.93-12.2 15.47-21.7-.36-22.56-19.34-38.3-23.77-59.59-.56-6.92-1.43-16.07 5.89-19.78-4.08 6.37.87 4.91 5.68 3.41-.75 4.4-7.85 5.39-8.04 10.5 3.06-1.32 8.96-6.33 11.11-2.04-5.27 1.68-9.45 5.45-10.07 11.1 2.82-2.58 9.81-10.9 11.89-4.02-11.41.35-9.53 17.23 1.71 15.23 12.12-10.5 3.93-36.08-10.09-40.53m635.38.84c.95 6.12-1.27 14.81.98 19.58 2.04-5.1 5.1-10.08 9.46-13.94-3.66-1.51-6.8-5.07-10.44-5.64m21.75 0c-8.35 2.96 4.82 10.27 8.58 8.62 11.12-2.94-3.92-8.26-8.58-8.62m-7.05 7.1c-11.94 6.83-18.7 26.58-9.07 37.51 7.72 7.92 17.42-9.38 6.92-12.19-8.05-3.81 4.11-2.53 7.12.11-1.13-4.42-7.92-5.42-7.98-9.81 4.31-.97 6.2 3.92 9.81 4.73-.3-4.72-6.17-6.39-7.18-10.68 6.06 2.96 8.25 1.49 4.13-4.33 8.03 2.31 7.26 13.76 6.02 20.27-1.97 15.77-13.69 27.34-19.32 41.65-8 12.76-6.74 35.86 10.31 40.15 16.68-4.09 23.39-27.92 14.71-41.83-7.99-6.04-18.95 7.37-9.67 12.86 9.64 5.75-3.77 4.52-5.71-.57-4.7 5.01 14.81 14.08 3.08 10.3-7.8-5.87-3.1 4.3 1.41 6.64-2.03 4.58-5.41-3.42-8.72-2.95.11 3.72 6.48 12.22-.44 7.12-14.17-31.57 29.14-54.22 19.2-86.21-1.32-7.12-7.29-12.82-14.62-12.77M52.47 592.08c-2.22 5.89-9.34 5.06-13.61 2.08 5.09 9.23 9.75 18.68 14.44 28.1.41-8.52 2.92-23.88-.83-30.18m620.41 5.06c.71 10.53-1.09 24.14.73 32.66 2.52-9.56 10.44-18.15 14.24-27.64-6.85 2.38-11.8-1.32-14.97-5.02m-647.43 4.31c-6.01.72-19.43 1.67-9.01 7.13 3.64 8.51 13.4 2.4 19.8 7.32-3.62-3.97-3.85-15.91-10.79-14.45m673.9 8.84c-4.78 2.07-6.65 8.06-8.27 12.71 8.64-1.6 19.58-.54 21.68-11.71-4.51.21-8.95-.67-13.41-1M52.4 653.03c-1.31 4.31-4.86 6.75-8.5 8.97 4.77 2.28 5.83 9.61 10.16 10.81-.84-6.32 2.61-16.47-1.66-19.78m-29.27 1.29c-4.43 3.21-9.95 4.48-14.36 7.51 6.31 2.21 13.8 11.51 19.89 3.85 9.33-3.49-2.37-8.21-5.53-11.36m649.75 5.9c-.2 6.46 2.52 16.28-7.76 12.69-11.34-1.05 2.43 4.88 4.21 8.79 4.24-2.22 6.94-9 12.42-10.97-1.63-3.7-6.14-8.1-8.87-10.51m30.42 2.33c-3.39 2.55-13.57 7.25-5.94 10.03 5.21 9.22 14.29.86 20.69-2.49-5.22-1.8-10.17-5.52-14.75-7.54m-294.65 1.02c-40.69 6.3-88.58-12.5-124.21 13.79-2.93 3.49-9.54 6.26-9.26 11.34 19.82 4.68 42.82 15.17 61.91 3.31 11.03-13.13-12.7-28.89-17.6-12.51-3.7 8.54-4.39-3.58.24-6.04-5.45-2.35-9.77 7.29-12.24 11.14-4.28-.33 1.12-6.96 1.34-9.74-6.38-.05-7.64 8.04-12.52 10.43 4.04-7.41-.5-7.74-6.36-4.25 16.5-15.28 41.41-13.03 62.28-11.36 30.55-.38 65.63-7.94 92.54 10.61 5.1 7.41-12.84-8.02-8.71.67 4.6 11.36-7.98-8.54-11.46-5.61 1.07 2.89 5.75 9.36 1.79 10.48-2.77-5.34-5.75-11.17-11.63-13.71.29 3.66 6.46 9.98 1.6 11.7-2.59-6.29-7.02-14.38-15.38-11.09-10.71 3.96-7 20.63 3.11 23.28 18.46 4.24 39.19-2.86 55.71-7.9-10.37-16.19-31.84-26.46-51.15-24.54m21.6-.86c4.47 3.08 13.28 6.3 19.62 3.8.28 7.92 7.97 12.49 12.1 18.56 5.18-5.69 12.04-10.64 13.01-18.81 6.56 3.52 14.58-1.22 19.91-3.4-10.85 2.02-26.25-5.3-32.82 6.25-6.34-11.59-21.3-4.17-31.82-6.4m-392.14 1.81c-16.41 3.38-21.5 26.43-15.72 40.05 13.27 5.55 31.34 1.35 38.97-11.37 3.1-5.61-.73-11.92-5.52-15.07-6.56-3.74-9.06-13.71-17.73-13.61m205.46-.06c2.08 1.94 11.04 4.4 16.32 1.75 1.17 7.45 7.06 13.72 13.03 17.67 4.9-4.68 12.35-9.58 12.17-17.45 5.46 1.52 11.17 1.12 16.11-1.84-9.79-.72-23.52-3.62-29.05 4.47-5.64-9.12-19.15-4.17-28.58-4.6m-52.75 6.71c8.15 6.68-4.58 12.95-7.97 4.96-4 2.26-3.57 10.2-4.7 14.6 5 1.79 11.16 6.2 15.67 1.14 9.84-3.6 7.64-20.9-3-20.7m9.02-.29c-.97 11.33 14.76-3.82 0 0m137.8.09c-.06 11.86 15.61-3.29 0 0m52.01.08c-.63 10.05 15.24-4.26 0 0m142.71.29c-2.02.25-5.37 0-3.49 2.87 1.8 5.82 10.31-4.22 3.49-2.87m-167.86.8c-1.18 10.1 14.62-3.77 0 0m324.69.5c-9.02-.03-16.77 8.23-16.73 17.03 3.12 11.71 16.56 16.59 27.48 17.32 3.32 1.56 8.17-1.27 7.06-5.04-.52-11.55-4.63-26.69-17.81-29.31m-635.13.17c1.31 4.44 8.6 5.46 10.93 10.29 1.77-4.24 6.13-6.77 8.85-9.3-4.39-2.72-13.9.1-19.78-.99m51.24.14c6.02 5.74 19.43 9.59 27.54 15.19-3.88-4.86-2.43-11.47 2.02-14.49-8.17-1.88-20.02-.19-29.56-.7m56.04-.05c1.95 3.46 10.56 4.95 13.69 9.15.94-3.76 5.61-5.95 5.59-9.31-6.43 0-12.86.05-19.28.16m187.97.19c-10.3 5.79-2.83 24.25 8.59 19.92 8.7-1.82 10.29-17.06 1.05-18.75.87 8.54-10.26 3.78-9.64-1.17m34.06-.34c4.02 7.54-9.88 8.98-9.35 1.23-9.82 5-4 22.51 6.85 18.94 9.96-.76 12.69-18.2 2.5-20.17m155.05.45c-7.8 5.99-3.79 19.63 6.01 20.31 10.04 2.51 13.65-12.59 6.41-17.49-.77 4.17-4.34 5.28-8.8 3.18-4.44-.39 1.35-7.95-3.62-6m14.93-.55c.44 3.68 4.21 6.71 5.59 10.48 4.12-4 8.98-6.8 13.97-9.49-4.84-2.25-13.43-.05-19.56-.99m43.85.13c3.28 3.19 7.57 8.07 4.95 15.06 9.57-3.71 17.78-11.52 27.71-14.09-8.14-2.74-22.66.45-32.66-.97m44.44.63c-22.04 3.13-37.79 23.35-60.6 24.58-5.26-.64-13.96-.14-15.28-6.9 5.86 4.17 7.28 1.91 4.31-4.16 4.43 1.05 6.07 6.89 10.71 7.2-.89-3.59-5.67-5.51-4.77-9.8 4.3.33 5.42 6.85 9.87 7.98-3.01-2.7-3.63-15.02-.15-7.12 2.4 9.69 18.57 2.25 13.09-5.74-10.24-11.52-32.4-4.36-38.55 8.62 1.53 15.64 22.44 17.44 33.92 13.41 19.1-4.99 33.65-22.77 54.43-21.6 4.58-.18 12.57.93 12.66 6.95-2.87-1.38-5.6-3.41-8.9-3.54-.25 3.09 6.04 5.79 3.61 8.72-3.02-3.7-13.22-9.75-7.41-1.49 3.79 11.74-5.27-7.77-10.29-3.08 2.4 2.02 7.13 7.74 3.19 9.58-2.57-12.42-21.24-6.54-16.15 5.09 13.44 9.87 37.45 2.9 42.48-13.26-1.5-11.93-15.52-17.31-26.17-15.44m-559.98 1.06c-8.33.19-17.79 8.52-13.77 17.36 5.96 14.63 25.1 17.4 38.64 13.87 7.02-2.31 4.73-13.68-2.05-14.27-5.91-2.26-7.8 4.19-10.88 7.41-2.55-3.44 3.17-7.92 3.05-11.91-5.83-1.35-6.73 7.84-11.58 7.66-1.8-4.45 6.97-5.96 3.81-9.7-4.4 1.62-7.41 5.52-11.68 7.29.56-3.69 3.98-5.43 6.64-7.48-1.62-3.84-7.15.56-10.14 1.18 1.58-5.57 9.06-6.4 13.96-5.96 23.44 1.32 39.95 22.73 63.55 23.06 9.57.99 23.34-3.13 23.45-14.71-6.94-12.74-30.01-20.48-40.68-8.64-2 11.24 14.89 13.14 15.24 1.72 6.79 2.01-1.29 9.15-4.12 11.85 5.77-.75 9.53-4.65 11.18-10.06 4.34 2.15-.71 8.06-2 11.15 4.41-.57 6.05-5.27 9.01-7.97 4.14-.7-3.67 9.74 2.05 6.86 6.18-2.82-1.23 4.27-4.06 4.32-29.69 5.27-49.72-28.61-79.62-23.03m119.72 14.74c-6.45 3.93-.53 12.09.87 17.54 4.66-3.18 7-16.09-.87-17.54m141.08.17c-8.79 4.45-4.07 10.69-1.31 17.58 2.49-3.33 8.83-15.94 1.31-17.58m49.13-.42c-8.11 3.57-1.92 13.38 1.45 17.98 1.9-6.02 5.39-13.36-1.45-17.98m140.82.37c-6.49 4.29-5.42 11.11-1.34 16.77 3.48-4.46 8.13-13.99 1.34-16.77m-165.51.88c-8.64 2.84-2.12 10.55.01 15.93 3.14-4.62 7.95-13.87-.01-15.93m-255.68.49c5.09 6.42-1.61 16.27 7.22 19.86 6.29 11.52 6.5-6.27 7.38-12.18-4.7-2.86-9.63-5.33-14.6-7.68m444.28.66c-5.53 4.75 1.47 11.13 2.75 16.38 7.72-2.86 2.45-14.85-2.75-16.38m65.99.13c-11.4 2.37-12.37 11.46-10.22 21.25 9.82-.16 13.12-17.38 10.22-21.25m-351.9.95c-14.86 1.26 2.75 15.19 2.47 23.56 4.04-5.73 6.25-14.38 9.96-20.94-2.05-3.98-8.76-2.72-12.43-2.62m189.91.07c-15.2-.06 1.31 14.77 2.57 22.52 2.97-8.69 19.58-26.98-2.57-22.52m-282.14.69c-5.78 3.97-4.46 11.43-.13 16.11 1.09-4.59 7.29-14.83.13-16.11M64.3 694.27c-9.3 7.15-5.08 15.99.86 23.96 4.55-7.98 12.31-18.99-.86-23.96m605.21.3c-10.93 6.98-3.73 14.74.67 23.35 5.65-6.73 10.95-19.69-.67-23.35z"
          className="frame_svg__selected"
        />
        <path
          fill="#dadada"
          d="M688.81 29.24c3.35 2.1 6.84 5.6 8.95 8.95-5.6.43-9.38-3.35-8.95-8.95zM37.08 32.16c.93 8.14-10.9 4.11 0 0zM681.7 32.26c4.7 3.95 9.08 8.34 13.04 13.04-3.17-.88-5.98-2.61-8.79-4.26-1.65-2.81-3.38-5.62-4.25-8.78zM44.06 35.29c-.41 4.47-4.54 8.15-8.82 8.96 1.16-4.37 5.13-6.83 8.82-8.96zM677.85 39.08c-6.79-8.32 3.4 1.83 8.1 1.96.53 4.41 4.39 7.08 6.21 10.9-3.88-.69-5.1-5.61-9.04-5.92.73 3.32 1.94 6.81 1.22 10.22-1.8-7.02-6.57-11.78-13.58-13.58 4.69-.12 14.55 2.87 7.09-3.58zM45.52 42.33c5.01-1.75-.89 5.74-3.73 5.5.42-2.25.94-5.21 3.73-5.5zM43.88 680.98c-.72-3.32-1.97-6.83-1.22-10.22 1.8 7.01 6.56 11.78 13.58 13.58-3.41.72-6.9-.49-10.22-1.23.31 3.95 5.23 5.18 5.91 9.07-3.64-2.11-6.46-5.69-10.84-6.26-.64-4.37-4.43-7.06-6.25-10.86 3.88.69 5.1 5.61 9.04 5.92zM684.49 679.43c1.92 1.31-1.93 6.5-5.32 5.78.7-2.65 2.63-4.99 5.32-5.78z"
          className="frame_svg__selected"
        />
        <path
          fill="#dadada"
          d="M32.06 681.88c3.19.89 6.16 2.41 9.03 4.04 1.62 2.87 3.13 5.83 4.03 9.02a315.38 315.38 0 01-13.06-13.06zM689.56 683.35c7.11-1.53-10.15 13.73-5.87 5.53 1.38-2.3 3.36-4.47 5.87-5.53zM29.24 688.81c5.6-.43 9.38 3.35 8.95 8.95-3.35-2.11-6.85-5.6-8.95-8.95zM691.36 690.31c9.67-1.88-6.7 8.58 0 0z"
          className="frame_svg__selected"
        />
      </g>
    </svg>
  );
}

export default SvgFrame;