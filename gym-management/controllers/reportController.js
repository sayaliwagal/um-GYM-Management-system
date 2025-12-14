import ExcelJS from "exceljs";
import Bill from "../models/Bill.js";

export const exportBills = async (req, res) => {
  const bills = await Bill.find().populate("member");

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Bills");

  sheet.columns = [
    { header: "Member Name", key: "name" },
    { header: "Amount", key: "amount" },
    { header: "Month", key: "month" },
    { header: "Status", key: "status" }
  ];

  bills.forEach(bill => {
    sheet.addRow({
      name: bill.member.name,
      amount: bill.amount,
      month: bill.month,
      status: bill.status
    });
  });

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=bills.xlsx"
  );

  await workbook.xlsx.write(res);
  res.end();
};
