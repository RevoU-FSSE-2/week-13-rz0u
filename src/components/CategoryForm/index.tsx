import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Category, CategoryForm as CategoryFormProps } from "../../types";
import { initialValues, validationSchema } from "./CategoryFormSchema";

interface Props {
  onSubmit: (values: CategoryFormProps) => void;
  category?: Category;
}

const CategoryForm = ({ onSubmit, category }: Props) => {
  let catStatus: boolean | undefined = category?.is_active;
  const handleOnClick = (status: boolean) => {
    catStatus = status;
  };
  const handleSubmit = (values: CategoryFormProps) => {
    const obj = {
      name: values.name,
      is_active: catStatus,
    };
    onSubmit(obj);
  };

  const formik = useFormik({
    initialValues: category ?? initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        pt: "5rem",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          maxWidth: "max-content",
          padding: "1rem",
          margin: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ m: "1rem" }}>
          Sign In
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TextField
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              size="small"
            />
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                name="is_active"
                label="Status"
                value={formik.values.is_active}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("is_active", true)}
                error={
                  formik.touched.is_active && Boolean(formik.errors.is_active)
                }
                size="small"
              >
                <MenuItem onClick={() => handleOnClick(true)}>Active</MenuItem>
                <MenuItem onClick={() => handleOnClick(false)}>
                  Inactive
                </MenuItem>
              </Select>
              {formik.touched.is_active && formik.errors.is_active && (
                <FormHelperText error>{formik.errors.is_active}</FormHelperText>
              )}
            </FormControl>

            <Button variant="contained" type="submit">
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default CategoryForm;
