package com.rocketninesolutions;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

public class LaunchOrderListingTest {

    //TODO - Use the Stub Recipe to test that launches are sorted correctly
    @Test
    public void LaunchesAre_SortedByDestination_DestinationsAreUnique() {
        // Step 1. Create LaunchInfoProviderStub (that implements ISpacelineLaunchInfoProvider)
        MockLaunchProvider mock = new MockLaunchProvider();

        // Step 2 & 3 & 4. Create SUT - SpaceportDepartureBoard, using Constructor Injection
        // Exercising this behavior happens during construction of the System Under Test
        SpaceportDepartureBoard sut = new SpaceportDepartureBoard(mock);

        // Step 5. Verify the results are sorted correctly
        Assertions.assertEquals("Mars", sut.getLaunchList().get(0).getDestination());
        Assertions.assertEquals("Pluto", sut.getLaunchList().get(1).getDestination());
    }

    private class MockLaunchProvider implements ISpacelineLaunchInfoProvider {
        @Override
        public List<LaunchInfo> getCurrentLaunches() {
            LaunchInfo toPluto = new LaunchInfo(UUID.randomUUID());
            toPluto.setDestination("Pluto");
            LaunchInfo toMars = new LaunchInfo(UUID.randomUUID());
            toMars.setDestination("Mars");

            List<LaunchInfo> list = Arrays.asList(toPluto, toMars);

            return list;
        }
    }
}
