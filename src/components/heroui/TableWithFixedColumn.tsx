"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  ScrollShadow,
  Progress,
  Chip,
  Button,
  ChipProps,
  Pagination,
} from "@heroui/react";

import "@/app/globals.css";

export const HeartIcon = ({
  fill = "currentColor",
  filled: filled = false,
  size = 12,
  ...props
}) => {
  return (
    <svg
      fill={filled ? fill : "none"}
      height={size || 24}
      viewBox="0 0 24 24"
      width={size || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
};
interface Column {
  name: string;
  uid: string;
  sortable?: boolean;
  isFirst?: boolean;
}

export const columns: Column[] = [
  { name: "Date", uid: "date", sortable: true },
  { name: "First Name(S)", uid: "first-name", sortable: true },
  { name: "Surname", uid: "surname", sortable: true },
  { name: "ID No.", uid: "id-no", sortable: true },
  { name: "Mobile No", uid: "mobile-no" },
  { name: "Email Address", uid: "email-address" },
  { name: "Recruiter", uid: "recruiter" },
  { name: "Source", uid: "source" },
  { name: "Screening Call", uid: "screening-call" },
  { name: "Notes / Outcome", uid: "notes-outcome" },
  { name: "CV Received", uid: "cv-received", sortable: true },
  { name: "Application Form Sent", uid: "application-form-sent" },
  { name: "Application Form Received", uid: "application-form-received" },
  { name: "RTW Received & Checked", uid: "rtw-received-checked" },
  { name: "Status", uid: "status" },
];

export const data = [
  {
    date: "02/01/2023",
    firstName: "Zoey",
    surname: "Lang",
    idNo: "987654321",
    mobileNo: "098-765-4321",
    emailAddress: "",
    recruiter: "Jane Smith",
    source: "Indeed",
    screeningCall: "No",
    notesOutcome: "Pending",
    cvReceived: "No",
    applicationFormSent: "No",
    applicationFormReceived: "No",
    rtwReceivedChecked: "No",
    status: "converted",
  },
  {
    date: "02/01/2023",
    firstName: "Lasan",
    surname: "Seniya",
    idNo: "987654321",
    mobileNo: "098-765-4321",
    emailAddress: "",
    recruiter: "Jane Smith",
    source: "Indeed",
    screeningCall: "No",
    notesOutcome: "Pending",
    cvReceived: "No",
    applicationFormSent: "No",
    applicationFormReceived: "No",
    rtwReceivedChecked: "No",
    status: "converted",
  },
];

export const statusOptions = [
  { name: "Converted", uid: "converted" },
  { name: "In progress", uid: "in_progress" },
  { name: "Not proceeding", uid: "not_proceeding" },
];

// ScrollShadow1
export const ScrollShadow1 = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  return (
    <div className="flex flex-col gap-2 table-container">
      <ScrollShadow
        hideScrollBar
        orientation="horizontal"
        className="container rounded-xl"
        isEnabled={false}
      >
        {children}
      </ScrollShadow>
    </div>
  );
};

export default function TableWithFixedColumn() {
  return (
    <div className="center-table flex">
      <div className="flex flex-col gap-2">
        {/* Scrollable Table */}
        <Table
          BaseComponent={ScrollShadow1}
          className="max-w-7xl"
          topContent={
            <div className="flex gap-2">
              <Button size="sm" radius="sm" className="bg-[#F5F7F9] rounded-md">
                Add New
              </Button>
              <Button size="sm" radius="sm" className="bg-[#F5F7F9] rounded-md">
                Export
              </Button>
            </div>
          }
          topContentPlacement="outside"
          bottomContent={
            <Pagination
              size="sm"
              radius="sm"
              className="place-items-end"
              total={100}
            />
          }
          bottomContentPlacement="outside"
          classNames={{
            thead: "[&>tr:last-child]:!mt-0 [&>tr:last-child]:!h-0",
            th: "bg-[#CAF3DA] text-[#000000] first:rounded-bl-none last:rounded-br-none py-5",
          }}
        >
          <TableHeader>
            {columns.map((column) => (
              <TableColumn
                key={column.uid}
                className={(() => {
                  if (column.name === "Status") return "sticky right-0";
                  return "";
                })()}
              >
                {column.name}
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>02/01/2023</TableCell>
              <TableCell>Zoey</TableCell>
              <TableCell>Lang</TableCell>
              <TableCell>987654321</TableCell>
              <TableCell className="text-nowrap">098-765-4321</TableCell>
              <TableCell>zoey@example</TableCell>
              <TableCell className="text-nowrap">Jane Smith</TableCell>
              <TableCell>Indeed</TableCell>
              <TableCell>No</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>No</TableCell>
              <TableCell>No</TableCell>
              <TableCell>No</TableCell>
              <TableCell>No</TableCell>
              <TableCell className="sticky right-0 flex place-items-end gap-2 bg-white">
                <div>
                  <Chip
                    color="success"
                    variant="flat"
                    classNames={{
                      base: "text-[#000000] bg-[#FFE3B4] rounded-md",
                    }}
                  >
                    Converted
                  </Chip>
                </div>
                <div className="flex gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    className="bg-[#F5F7F9] rounded-md"
                  >
                    <HeartIcon />
                  </Button>
                  <Button
                    radius="sm"
                    isIconOnly
                    size="sm"
                    className="bg-[#F5F7F9] rounded-md"
                  >
                    <HeartIcon />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
