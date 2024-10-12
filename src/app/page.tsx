import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 pb-20 pt-16 lg:grid-cols-2 lg:px-0 lg:pt-6">
        <div>
          <h1 className="text-center text-[2.5rem] font-semibold leading-[36px] tracking-[-0.05em] text-[#07969E] lg:text-left lg:text-[3.5rem] lg:leading-[60px]">
            Dollar investments that help you grow
          </h1>

          <p className="mt-4 text-center font-medium lg:text-left">
            We put your money in high quality assets that help you build wealth
            and achieve your financial goals.
          </p>

          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <Link href="/" className="rounded-[0.625rem]">
              <Image alt="" src="/appstore.png" width={144} height={48} />
            </Link>

            <Link href="/" className="rounded-[0.625rem]">
              <Image alt="" src="/playstore.png" width={144} height={48} />
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative h-96 w-48 lg:h-[29rem] lg:w-56">
            <Image
              alt="image of the rise app running on an iPhone"
              src="/phone.png"
              fill
            />
          </div>
        </div>

        {/* top elipses */}
        <div className="absolute right-3 top-28 -z-10 h-3 w-3 rounded-full bg-[#A0DDE2]/50 lg:left-8 lg:top-8 lg:h-8 lg:w-8"></div>
        <div className="absolute right-8 top-4 -z-10 h-9 w-9 rounded-full bg-[#A0DDE2]/50 lg:right-1/3 lg:top-0 lg:h-14 lg:w-14"></div>

        {/* bottom elipses */}
        <div className="absolute bottom-12 left-16 -z-10 h-14 w-14 rounded-full bg-[#A0DDE2]/50 lg:bottom-0 lg:left-56"></div>
        <div className="absolute bottom-8 right-8 -z-10 h-14 w-14 rounded-full bg-[#A0DDE2]/50 lg:bottom-6 lg:right-0"></div>
        <div className="absolute bottom-64 left-4 -z-10 h-8 w-8 rounded-full bg-[#A0DDE2]/50 lg:bottom-8 lg:right-56"></div>
      </section>

      <div className="px-4">
        <p className="text-lg font-bold tracking-[-0.08em] text-[#7B8DA8] lg:hidden">
          We are supported by
        </p>
        <div className="relative mx-auto h-16 max-w-md lg:h-20">
          <Image
            alt="image of the rise app running on an iPhone"
            src="/supporters.png"
            fill
          />
        </div>
      </div>

      <section className="mx-auto max-w-6xl space-y-16 px-4 pt-6 lg:px-0">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <div className="order-2 text-center lg:text-left">
            <h2 className="text-xl font-semibold tracking-[-0.05em] lg:text-[2rem]">
              Invest your money in dollars
            </h2>

            <p className="mt-2.5 font-medium lg:max-w-xs">
              By holding your investments in a stable currency, your money grows
              more over time and retains its value better.
            </p>

            <Link
              href="/"
              className="mt-6 block text-lg font-medium capitalize tracking-[-0.05em] text-[#07969E]"
            >
              Start investing now
            </Link>
          </div>

          <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative h-[17.5rem] w-[17.5rem] lg:h-[30rem] lg:w-[30rem]">
              <Image
                alt="image of the rise app running on an iPhone"
                src="/woman-1.png"
                fill
              />
            </div>

            <div className="absolute bottom-12 h-6 w-full max-w-52 bg-[#A0DDE2]/80 lg:hidden"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <div className="order-2 text-center lg:text-left">
            <h2 className="text-xl font-semibold tracking-[-0.05em] lg:text-[2rem]">
              Choose what&apos;s best for you
            </h2>

            <p className="mt-2 font-medium">
              Unlike other platforms, Rise lets you pick between stocks, US real
              estate and fixed income, according to your risk appetite. That way
              you can spread your risk and tap into different investments all in
              one place.
            </p>

            <Link
              href="/"
              className="mt-6 block text-lg font-medium capitalize tracking-[-0.05em] text-[#07969E]"
            >
              Start investing now
            </Link>
          </div>

          <div className="relative order-1 flex justify-center lg:justify-start">
            <div className="relative h-[17.5rem] w-[17.5rem] lg:h-[30rem] lg:w-[30rem]">
              <Image
                alt="image of the rise app running on an iPhone"
                src="/woman-2.png"
                fill
              />
            </div>

            <div className="absolute bottom-14 h-6 w-full max-w-52 bg-[#A0DDE2]/80 lg:hidden"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <h2 className="text-xl font-semibold tracking-[-0.05em] lg:text-[2rem]">
              Set goals and reach them
            </h2>

            <p className="mt-2 font-medium">
              You can invest towards a goal on Rise--retirement, higher
              education, save for your home or travel budgets. Or create a goal
              of your own and invest periodically to achieve them.
            </p>

            <Link
              href="/"
              className="mt-6 block text-lg font-medium capitalize tracking-[-0.05em] text-[#07969E]"
            >
              Start investing now
            </Link>
          </div>

          <div className="relative order-1 flex justify-center lg:justify-end">
            <div className="relative h-[17.5rem] w-[17.5rem] lg:h-[30rem] lg:w-[30rem]">
              <Image
                alt="image of the rise app running on an iPhone"
                src="/woman-3.png"
                fill
              />
            </div>

            <div className="absolute bottom-14 h-6 w-full max-w-52 bg-[#A0DDE2]/80 lg:hidden"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <div className="order-2 text-center lg:text-left">
            <h2 className="text-xl font-semibold tracking-[-0.05em] lg:text-[2rem]">
              We remember so you dont have to
            </h2>

            <p className="mt-2 font-medium">
              Our Auto-invest feature makes it easy to stay consistent, even
              when you forget. Set a funding amount, frequency and payment
              method and Rise will automatically fund your investment, on
              schedule.
            </p>

            <Link
              href="/"
              className="mt-6 block text-lg font-medium capitalize tracking-[-0.05em] text-[#07969E]"
            >
              Start investing now
            </Link>
          </div>

          <div className="relative order-1 flex justify-center">
            <div className="relative h-[17.5rem] w-[17.5rem] lg:h-[30rem] lg:w-[30rem]">
              <Image
                alt="image of the rise app running on an iPhone"
                src="/man-1.png"
                fill
              />
            </div>

            <div className="absolute bottom-16 h-6 w-full max-w-52 bg-[#A0DDE2]/80 lg:hidden"></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <h2 className="mb-2 text-center text-4xl font-bold tracking-[-0.05em]">
            Asset Classes
          </h2>

          <p className="text-muted-foreground mb-12 text-center tracking-[-0.05em]">
            It&apos;s your money, choose where you invest it
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-11">
            <div className="relative flex h-full flex-col items-center overflow-hidden rounded-lg border-2 border-[#919FB5]/20 pb-8 text-center">
              <div className="relative mb-16 h-28 w-full bg-[#FFF4F0]">
                <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 rounded-full bg-white p-4">
                  <Image
                    alt="image of coins representing stock"
                    src="/stocks.png"
                    width={85}
                    height={85}
                    className="rounded-full"
                  />
                </div>
              </div>

              <div className="px-2">
                <h3 className="mb-2 text-2xl font-semibold tracking-[-0.05em]">
                  Stocks
                </h3>

                <p className="mb-4 tracking-[-0.05em] lg:tracking-normal">
                  We help you invest and manage your money by investing in our
                  portfolio of 30 high-growth stocks across the US market with
                  our equity portfolio of power stocks.
                </p>

                <div className="mb-16">
                  <p>
                    <span>Historical returns:</span> 14% per annum
                  </p>
                  <p>
                    <span>Risk Level:</span> Medium
                  </p>
                </div>

                <Link
                  href="/"
                  className="absolute bottom-8 left-0 inline-flex w-full items-center justify-center gap-2.5 text-center font-semibold tracking-[-0.05em] text-[#07969E]"
                >
                  Learn how Stocks works
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative flex h-full flex-col items-center overflow-hidden rounded-lg border-2 border-[#919FB5]/20 pb-8 text-center">
              <div className="relative mb-16 h-28 w-full bg-[#F6F2FF]">
                <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 rounded-full bg-white p-4">
                  <Image
                    alt="image of coins representing stock"
                    src="/real-estate.png"
                    width={85}
                    height={85}
                    className="rounded-full"
                  />
                </div>
              </div>

              <div className="px-2">
                <h3 className="mb-2 text-2xl font-semibold tracking-[-0.05em]">
                  Real Estate
                </h3>

                <p className="mb-4 tracking-[-0.05em] lg:tracking-normal">
                  Our Real Estate plan is the sweet middle. Best for those who
                  want a balance of good returns and medium risk. This plan
                  invests in rented buildings in the US.
                </p>

                <div className="mb-16">
                  <p>
                    <span>Historical returns:</span> 14% per annum
                  </p>
                  <p>
                    <span>Risk Level:</span> Medium
                  </p>
                </div>

                <Link
                  href="/"
                  className="absolute bottom-8 left-0 inline-flex w-full items-center justify-center gap-2.5 text-center font-semibold tracking-[-0.05em] text-[#07969E]"
                >
                  Learn how Real Estate works
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative flex h-full flex-col items-center overflow-hidden rounded-lg border-2 border-[#919FB5]/20 pb-8 text-center">
              <div className="relative mb-16 h-28 w-full bg-[#ECFEFE]">
                <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 rounded-full bg-white p-4">
                  <Image
                    alt="image of coins representing stock"
                    src="/fixed-income.png"
                    width={85}
                    height={85}
                    className="rounded-full"
                  />
                </div>
              </div>

              <div className="px-2">
                <h3 className="mb-2 text-2xl font-semibold tracking-[-0.05em]">
                  Fixed Income
                </h3>

                <p className="mb-4 tracking-[-0.05em] lg:tracking-normal">
                  A low-risk asset perfect for anyone who wants to protect their
                  money in a secure, appreciating currency, i.e. the dollar. For
                  people who want to protect their hard-earned money from
                  inflation while earning steady returns.
                </p>

                <div className="mb-16">
                  <p>
                    <span>Historical returns:</span> 14% per annum
                  </p>
                  <p>
                    <span>Risk Level:</span> Medium
                  </p>
                </div>

                <Link
                  href="/"
                  className="absolute bottom-8 left-0 inline-flex w-full items-center justify-center gap-2.5 text-center font-semibold tracking-[-0.05em] text-[#07969E]"
                >
                  Learn how Fixed Income works
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 pb-12 pt-6 lg:grid-cols-2 lg:px-0">
        <div className="flex justify-center">
          <div className="relative h-[31.75rem] w-80">
            <Image
              alt="image of the rise app running on an iPhone"
              src="/build-wealth.png"
              fill
            />
          </div>
        </div>

        <div className="text-center lg:max-w-md lg:text-left">
          <p className="text-lg font-medium tracking-[-0.05em]">The Rise App</p>

          <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em] lg:text-[2.5rem]">
            Save for your <span className="text-[#8C5FF8]">future</span>
          </h2>

          <p className="mt-4">
            With Rise, you achieve your financial goals faster. Save for school,
            your home, vacations, your children’s future and more.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              href="/"
              className="mt-8 block w-fit rounded-md bg-[#07969E] px-8 py-3 font-semibold capitalize text-white"
            >
              Start Saving
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="lg: relative w-full overflow-hidden px-4 py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-[2rem] font-semibold tracking-[-0.05em] lg:text-[2.5rem]">
              How we are Regulated
            </h2>

            <p className="text-sm lg:text-base lg:font-medium">
              Rise is registered and regulated both in the US and in Nigeria.
              Our team is made up of US registered investment advisers, our
              Nigerian users are covered by our SEC licensed trustees, ARM
              Trustees and all our assets are held with regulated third parties,
              in all relevant jurisdictions
            </p>
          </div>

          {/* elipses on the left */}
          <div className="absolute -bottom-1/4 -left-24 -z-10 h-80 w-80 rounded-full bg-[#F6E4F0] opacity-90 bg-blend-multiply blur-lg"></div>
          <div className="absolute -left-24 -top-1/4 -z-10 h-80 w-80 rounded-full bg-[#FFF4F0] opacity-90 bg-blend-multiply blur-lg"></div>

          {/* elipses on the right */}
          <div className="absolute -top-1/4 right-0 -z-10 h-80 w-80 rounded-full bg-[#F6F2FF] opacity-90 bg-blend-multiply blur-lg lg:-right-16"></div>
          <div className="absolute -bottom-1/4 -right-8 -z-10 h-80 w-80 rounded-full bg-[#ECFEFE] opacity-90 bg-blend-multiply blur-lg lg:-right-16"></div>
        </div>
      </section>

      <section className="mt-20 pb-20 pt-4">
        <div>
          <h2 className="text-center text-[2.5rem] font-semibold tracking-[-0.05em] text-[#40BBC3]">
            From The People Who Use Rise
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-center font-medium tracking-[-0.05em] lg:text-lg">
            Our mission at Risevest is to empower more people just like you to
            achieve your personal financial goals.
          </p>

          <div className="mt-10 overflow-hidden">
            <div className="flex animate-[slide_30s_linear_infinite]">
              <div className="mb-8 w-full flex-none px-4 md:w-1/3">
                <div className="flex min-h-60 flex-col justify-between rounded-lg bg-white p-6 shadow-[0_12px_24px_0_rgba(64,187,195,0.15)]">
                  <p className="mb-4 text-gray-600">
                    &quot;I don&apos;t want to invest in separate stocks because
                    I&apos;m not a financial expert and I would rather trust my
                    money in the hands of people like Rise who are skilled and
                    knowledgeable.&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                      <Image alt="Image of Lade" src="/lade.jpeg" fill />
                    </div>

                    <span className="font-semibold">Lade</span>
                  </div>
                </div>
              </div>

              <div className="mb-8 w-full flex-none px-4 md:w-1/3">
                <div className="flex min-h-60 flex-col justify-between rounded-lg bg-white p-6 shadow-[0_12px_24px_0_rgba(64,187,195,0.15)]">
                  <p className="mb-4 text-gray-600">
                    &quot;I don&apos;t want to invest in separate stocks because
                    I&apos;m not a financial expert and I would rather trust my
                    money in the hands of people like Rise who are skilled and
                    knowledgeable.&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                      <Image alt="Image of Jesse" src="/lade.jpeg" fill />
                    </div>

                    <span className="font-semibold">Jesse</span>
                  </div>
                </div>
              </div>

              <div className="mb-8 w-full flex-none px-4 md:w-1/3">
                <div className="flex min-h-60 flex-col justify-between rounded-lg bg-white p-6 shadow-[0_12px_24px_0_rgba(64,187,195,0.15)]">
                  <p className="mb-4 text-gray-600">
                    &quot;I chose Rise because of its leadership, wealth of
                    knowledge and the people who support them. I invest with
                    Rise in order to protect my savings and investment from
                    being depleted by devaluation and inflation that&apos;s at
                    an all-time high in Nigeria.&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                      <Image alt="Image of Raye" src="/raye.jpeg" fill />
                    </div>

                    <span className="font-semibold">Raye</span>
                  </div>
                </div>
              </div>

              <div className="mb-8 w-full flex-none px-4 md:w-1/3">
                <div className="flex min-h-60 flex-col justify-between rounded-lg bg-white p-6 shadow-[0_12px_24px_0_rgba(64,187,195,0.15)]">
                  <p className="mb-4 text-gray-600">
                    &quot;I don&apos;t want to invest in separate stocks because
                    I&apos;m not a financial expert and I would rather trust my
                    money in the hands of people like Rise who are skilled and
                    knowledgeable.&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                      <Image alt="Image of Lade" src="/lade.jpeg" fill />
                    </div>

                    <span className="font-semibold">Lade</span>
                  </div>
                </div>
              </div>

              <div className="mb-8 w-full flex-none px-4 md:w-1/3">
                <div className="flex min-h-60 flex-col justify-between rounded-lg bg-white p-6 shadow-[0_12px_24px_0_rgba(64,187,195,0.15)]">
                  <p className="mb-4 text-gray-600">
                    &quot;I don&apos;t want to invest in separate stocks because
                    I&apos;m not a financial expert and I would rather trust my
                    money in the hands of people like Rise who are skilled and
                    knowledgeable.&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                      <Image alt="Image of Jesse" src="/lade.jpeg" fill />
                    </div>

                    <span className="font-semibold">Jesse</span>
                  </div>
                </div>
              </div>

              <div className="mb-8 w-full flex-none px-4 md:w-1/3">
                <div className="flex min-h-60 flex-col justify-between rounded-lg bg-white p-6 shadow-[0_12px_24px_0_rgba(64,187,195,0.15)]">
                  <p className="mb-4 text-gray-600">
                    &quot;I chose Rise because of its leadership, wealth of
                    knowledge and the people who support them. I invest with
                    Rise in order to protect my savings and investment from
                    being depleted by devaluation and inflation that&apos;s at
                    an all-time high in Nigeria.&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                      <Image alt="Image of Raye" src="/raye.jpeg" fill />
                    </div>

                    <span className="font-semibold">Raye</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-4 pb-20 pt-6 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div className="lg:.order-1 order-2 text-center lg:text-left">
            <h2 className="text-[2rem] font-semibold leading-[28.8px] tracking-[-0.05em] lg:text-[2.5rem] lg:leading-[48px]">
              Join The Rise Community
            </h2>

            <p className="mt-2 font-medium">
              If you want to go far, go together. Our Telegram community
              surrounds you with others who can help you along your financial
              journey with tips, support, advice and learning. It&apos;s
              completely free and open to new and seasoned investors.
            </p>

            <Link
              href="/"
              className="mx-auto mt-8 block w-fit rounded-md bg-[#A0DDE2] px-8 py-3 font-semibold capitalize tracking-[-0.05em] lg:mx-0"
            >
              Join our Community
            </Link>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative h-[17.125rem] w-[19rem] lg:h-[24.125rem] lg:w-[27rem]">
              <Image
                alt="image of the rise app running on an iPhone"
                src="/community.png"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-0">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 overflow-hidden rounded-[3.125rem] bg-[#ECFEFE] px-4 pb-14 pt-10 lg:mb-20 lg:grid-cols-2 lg:pt-24">
          <div className="text-center lg:text-left">
            <p className="font-medium capitalize text-[#07969E]">
              Download the Rise app
            </p>

            <h2 className="mt-4 text-xl font-semibold leading-[0.9] tracking-[-0.05em] lg:text-[2rem]">
              Join our 100,000 users investing and setting long term goals!
            </h2>

            <p className="mt-4 font-medium">
              Dollar investments that help you grow
            </p>

            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <Link href="/" className="rounded-[0.625rem]">
                <Image alt="" src="/appstore.png" width={144} height={48} />
              </Link>

              <Link href="/" className="rounded-[0.625rem]">
                <Image alt="" src="/playstore.png" width={144} height={48} />
              </Link>
            </div>
          </div>

          <div className="relative flex h-28 w-full lg:h-full">
            <Image
              alt="image of the rise app running on an iPhone"
              src="/phone.png"
              width={208}
              height={425}
              className="absolute left-1/2 top-0 -translate-x-1/2 lg:-top-16"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
