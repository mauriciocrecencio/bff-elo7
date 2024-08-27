import Section from "../ui/Section";

export function SellerWordSection() {
  return (
    <Section className="items-start bg-gray-bg pt-10">
      <img className="rounded-2xl" src="/images/worker-woman.jpeg" />
      <h2 className="mt-10 text-[26px] font-semibold leading-8 text-gray-500">
        Palavra da vendedora
      </h2>
      <h3 className="text-yellow text-xl leading-6 mt-1 font-semibold">
        Sed rutrum condimentum
      </h3>
      <p className="mt-6 text-gray-100 ">
        Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet
        malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed id
        quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque finibus
        vel tortor sed hendrerit. Vestibulum eu sem sapien. Nullam mollis, leo
        ut finibus euismod, arcu eros aliquam augue, in congue neque nulla
        vehicula purus.
      </p>
    </Section>
  );
}
