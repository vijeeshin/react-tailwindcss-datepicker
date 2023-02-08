import dayjs from "dayjs";
import React from "react";

import { generateArrayNumber } from "../../helpers";
import { RoundedButton } from "../utils";

interface Props {
    year: number;
    clickYear: (data: number) => void;
}

const Years: React.FC<Props> = ({ year, clickYear }) => {
    const date1 = new Date().getFullYear();

    return (
        <div className="w-full grid grid-cols-2 gap-2 mt-2">
            {generateArrayNumber(year, year + (date1 - year)).map((item, index) => (
                <RoundedButton
                    key={index}
                    padding="py-3"
                    onClick={() => {
                        clickYear(item);
                    }}
                >
                    <>{item}</>
                </RoundedButton>
            ))}
        </div>
    );
};

export default Years;
