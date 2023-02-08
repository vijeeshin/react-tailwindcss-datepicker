import React from "react";
interface Props {
    endYear: number;
    year: number;
    clickYear: (data: number) => void;
}
declare const Years: React.FC<Props>;
export default Years;
