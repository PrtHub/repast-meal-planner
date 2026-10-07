import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Repast — A week of keto, decided";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f7f4ee",
          padding: "70px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Left column: Branding & copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxWidth: "600px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f0e4d8",
              color: "#98421a",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              padding: "6px 16px",
              borderRadius: "999px",
              marginBottom: "24px",
              fontFamily: "sans-serif",
            }}
          >
            IOS MEAL PLANNER · KETO & LOW-CARB
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "72px",
              lineHeight: 1.05,
              color: "#221d19",
              letterSpacing: "-1.5px",
              marginBottom: "20px",
              fontWeight: 400,
            }}
          >
            A week of keto, decided.
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "24px",
              lineHeight: 1.4,
              color: "#6e655c",
              fontFamily: "sans-serif",
              marginBottom: "36px",
            }}
          >
            Repast builds your week from your own numbers and refuses to hand you a day that breaks
            your carb ceiling.
          </div>

          {/* Key metrics */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              fontSize: "16px",
              color: "#221d19",
              fontFamily: "sans-serif",
              fontWeight: 600,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#2e6e7e",
                  marginRight: "8px",
                }}
              />
              0g carb overage
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#c05621",
                  marginRight: "8px",
                }}
              />
              On-device only
            </div>
          </div>
        </div>

        {/* Right column: Phone frame mockup preview */}
        <div
          style={{
            display: "flex",
            width: "320px",
            height: "490px",
            backgroundColor: "#221d19",
            borderRadius: "44px",
            padding: "10px",
            boxShadow: "0 20px 40px rgba(34, 29, 25, 0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              backgroundColor: "#f7f4ee",
              borderRadius: "34px",
              padding: "20px",
              border: "1px solid #ede6dc",
              fontFamily: "sans-serif",
            }}
          >
            {/* Phone header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #e6dfd5",
                paddingBottom: "12px",
                marginBottom: "16px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "10px", fontWeight: 700, color: "#6e655c" }}>
                  WEEK 1 · DAY 1
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontFamily: "Georgia, serif",
                    color: "#221d19",
                  }}
                >
                  Monday, Oct 14
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#f0e4d8",
                  color: "#98421a",
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "4px 8px",
                  borderRadius: "999px",
                }}
              >
                20g Cap
              </div>
            </div>

            {/* Gauge card */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "14px",
                marginBottom: "14px",
                border: "1px solid #ede6dc",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                  fontSize: "12px",
                }}
              >
                <span style={{ color: "#6e655c", fontWeight: 700, fontSize: "10px" }}>
                  CARB CEILING
                </span>
                <span style={{ fontWeight: 700, color: "#221d19" }}>18g / 20g max</span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  backgroundColor: "#f0ebe2",
                  borderRadius: "999px",
                  overflow: "hidden",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "90%",
                    height: "100%",
                    backgroundColor: "#6e655c",
                    borderRadius: "999px",
                  }}
                />
              </div>
            </div>

            {/* Meal Card */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "12px",
                border: "1px solid #ede6dc",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#c05621",
                  marginBottom: "4px",
                }}
              >
                NEXT UP · DINNER
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#221d19",
                  marginBottom: "2px",
                }}
              >
                Pan-seared Salmon
              </div>
              <div style={{ fontSize: "11px", color: "#6e655c" }}>
                3g net carbs · 25 min · 42g protein
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
