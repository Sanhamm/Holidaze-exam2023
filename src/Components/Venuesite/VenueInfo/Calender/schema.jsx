import * as yup from "yup";

export const bookingSchema = yup.object({
  dateFrom: yup.date().min(new Date(), "must be on or after today"),
  dateTo: yup.date().min(yup.ref("dateForm"), "date must be after start date"),

  guests: yup
    .number()
    .required("need number of guest")
    .positive("must be a positiv number"),
});
