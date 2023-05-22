import customParseFormat from "dayjs/plugin/customParseFormat";

import { DatePicker } from "antd";
import dayjs from "dayjs";

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "DD/MM/YYYY";
<RangePicker defaultValue={[dayjs(), dayjs()]} format={dateFormat} />;
