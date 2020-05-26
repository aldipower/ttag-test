import React from "react";

import { t, ngettext, msgid  } from 'ttag.macro';

const TimespanType = Object.freeze({
  WEEK: "week",
  MONTH: "month",
  YEAR: "year",
});

export const timespanTypeNameMap = {
  [TimespanType.WEEK]: t`Woche`,
  [TimespanType.MONTH]: t`Monat`,
  [TimespanType.YEAR]: t`Jahr`,
};

export const timespanTypePluralNameFunc = {
  [TimespanType.WEEK]: count => ngettext(msgid`Woche`, `Wochen`, count),
  [TimespanType.MONTH]: count => ngettext(msgid`Monat`, `Monate`, count),
  [TimespanType.YEAR]: count => ngettext(msgid`Jahr`, `Jahre`, count),
};
