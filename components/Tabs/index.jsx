import * as Tabs from "@radix-ui/react-tabs";

export default function TabsComponent({
  title1,
  title2,
  content1,
  content2,
  marginTop = "mt-6 lg:mt-[42px]",
}) {
  return (
    <Tabs.Root
      className=" w-full rounded-[32px] bg-light-white p-6 lg:p-[42px] mt-4 lg:mt-[42px]"
      defaultValue="tab1"
    >
      <Tabs.List
        className="w-fit mx-auto p-[6px] lg:p-3 bg-white rounded-[100px] flex items-center justify-center gap-1 lg:gap-2"
        aria-label="Choose services"
      >
        <Tabs.Trigger
          className="text-2xsm leading-5 lg:text-sm lg:leading-5 text-dark-green font-sans font-semibold rounded-[100px] bg-white px-3 py-2 lg:px-6 lg:py-[10px] select-none data-[state=active]:bg-soft-green outline-none cursor-pointer"
          value="tab1"
        >
          {title1}
        </Tabs.Trigger>
        <Tabs.Trigger
          className="text-2xsm leading-5 lg:text-sm lg:leading-5 text-dark-green font-sans font-semibold rounded-[100px] bg-white px-3 py-2 lg:px-6 lg:py-[10px] select-none data-[state=active]:bg-soft-green outline-none cursor-pointer"
          value="tab2"
        >
          {title2}
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className={`${marginTop}`} value="tab1">
        {content1}
      </Tabs.Content>
      <Tabs.Content className={`${marginTop}`} value="tab2">
        {content2}
      </Tabs.Content>
    </Tabs.Root>
  );
}
