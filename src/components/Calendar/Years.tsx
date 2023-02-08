import dayjs from "dayjs";
import React from "react";

import { generateArrayNumber } from "../../helpers";
import { RoundedButton } from "../utils";

interface Props {
    endYear: number;
    year: number;
    clickYear: (data: number) => void;
}

const Years: React.FC<Props> = ({ year, clickYear, endYear }) => {
    return (
        <div className="w-full grid grid-cols-2 gap-2 mt-2">
            <RoundedButton
                padding="py-3"
                onClick={() => {
                    clickYear(2023);
                }}
            >
                <>2023</>
            </RoundedButton>
            {generateArrayNumber(year, endYear).map((item, index) => (
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
